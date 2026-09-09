import { NextRequest, NextResponse } from "next/server";
import { fetchCloverMenu, formatCloverPrice } from "@/lib/clover";
import { writeClient } from "@/sanity/lib/writeClient";

export const dynamic = "force-dynamic";

// Combo/special items that live on the website but aren't real Clover POS
// items. Seeded once (idempotent) and never touched by the Clover diff below
// because they're created without a cloverId.
const MANUAL_SEED_ITEMS: {
    _id: string;
    name: string;
    price: string;
    category: string;
    description: string;
    featured?: boolean;
}[] = [
    {
        _id: "mealSpecial-1",
        name: "1-Entrée Meal Special",
        price: "$23.99",
        category: "MEAL SPECIALS",
        description:
            "Full-size entrée with basmati rice, naan & side salad. Choice of any vegetarian entrée, Chicken Curry, Mango Chicken Curry, Coconut Chicken Curry, Butter Chicken, or Chicken Tikka Masala. Premium entrées (Goat, Shrimp, Fish Curry) +$2",
    },
    {
        _id: "mealSpecial-2",
        name: "2-Entrée Meal Special",
        price: "$41.99",
        category: "MEAL SPECIALS",
        featured: true,
        description:
            "Two full-size entrées with 2 basmati rice, 2 naan & a large side salad. Choose any 2 — duplicates allowed. Premium entrées (Goat, Shrimp, Fish Curry) +$2 each",
    },
    {
        _id: "mealSpecial-3",
        name: "3-Entrée Meal Special",
        price: "$59.99",
        category: "MEAL SPECIALS",
        description:
            "Three full-size entrées with 3 basmati rice, 3 naan & a large side salad. Choose any 3 — duplicates allowed. Premium entrées (Goat, Shrimp, Fish Curry) +$2 each",
    },
];

function isAuthorized(req: NextRequest): boolean {
    const expected = process.env.SYNC_SECRET;
    if (!expected) return false;
    const header = req.headers.get("authorization");
    if (header === `Bearer ${expected}`) return true;
    const queryToken = req.nextUrl.searchParams.get("secret");
    return queryToken === expected;
}

export async function POST(req: NextRequest) {
    return handleSync(req);
}

export async function GET(req: NextRequest) {
    return handleSync(req);
}

async function handleSync(req: NextRequest) {
    if (!isAuthorized(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dryRun = req.nextUrl.searchParams.get("dryRun") === "1";
    const debug = req.nextUrl.searchParams.get("debug") === "1";

    try {
        const { categories, items } = await fetchCloverMenu();
        const categoryNameById = new Map(categories.map((c) => [c.id, c.name] as const));

        const existing: { _id: string; cloverId: string }[] = await writeClient.fetch(
            `*[_type == "menuItem" && defined(cloverId)]{_id, cloverId}`
        );
        const existingByCloverId = new Map(existing.map((d) => [d.cloverId, d._id] as const));

        const seenCloverIds = new Set<string>();
        const toCreate: any[] = [];
        const toUpdate: { _id: string; name: string; price: string; category: string }[] = [];

        for (const item of items) {
            seenCloverIds.add(item.id);
            const category = item.categoryIds
                .map((id) => categoryNameById.get(id))
                .find(Boolean) ?? "UNCATEGORIZED";
            const price = formatCloverPrice(item.price);

            const existingId = existingByCloverId.get(item.id);
            if (existingId) {
                toUpdate.push({ _id: existingId, name: item.name, price, category });
            } else {
                toCreate.push({
                    _type: "menuItem",
                    cloverId: item.id,
                    name: item.name,
                    price,
                    category,
                    description: "",
                    isVegetarian: false,
                    isSpicy: false,
                    featured: false,
                });
            }
        }

        const toDelete = existing.filter((d) => !seenCloverIds.has(d.cloverId));

        const seedToCreate = MANUAL_SEED_ITEMS.filter(() => true); // createIfNotExists handles dedup

        const summary = {
            dryRun,
            cloverItemCount: items.length,
            created: toCreate.map((d) => d.name),
            updated: toUpdate.map((d) => d.name),
            deleted: toDelete.map((d) => d.cloverId),
            seeded: seedToCreate.map((d) => d.name),
        };

        if (!dryRun) {
            let tx = writeClient.transaction();
            for (const doc of toCreate) {
                tx = tx.create(doc);
            }
            for (const doc of toUpdate) {
                tx = tx.patch(doc._id, (p) =>
                    p.set({ name: doc.name, price: doc.price, category: doc.category })
                );
            }
            for (const doc of toDelete) {
                tx = tx.delete(doc._id);
            }
            for (const seed of MANUAL_SEED_ITEMS) {
                const { _id, ...rest } = seed;
                tx = tx.createIfNotExists({ _id, _type: "menuItem", ...rest });
            }
            if (toCreate.length || toUpdate.length || toDelete.length || MANUAL_SEED_ITEMS.length) {
                await tx.commit();
            }
        }

        return NextResponse.json({
            ok: true,
            ...summary,
            ...(debug
                ? {
                    debugSampleClover: items.slice(0, 3),
                    debugCategories: categories.slice(0, 10),
                }
                : {}),
        });
    } catch (err: any) {
        return NextResponse.json(
            { ok: false, error: err?.message ?? String(err) },
            { status: 500 }
        );
    }
}
