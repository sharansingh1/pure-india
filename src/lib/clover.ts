// Thin client for Clover's Inventory REST API (categories + items).
// Docs: https://docs.clover.com/docs/inventory-1
//
// NOTE: this was written against Clover's documented API shape but has not
// been exercised against a live merchant account yet (the environment that
// wrote it had no network access to api.clover.com). If the shape below
// doesn't match what a real response returns, hit /api/sync-clover?debug=1
// to see the raw payload and adjust `normalizeItem`/`normalizeCategory`.

const CLOVER_API_BASE = "https://api.clover.com/v3";
const PAGE_LIMIT = 100;

export interface CloverCategory {
    id: string;
    name: string;
}

export interface CloverItem {
    id: string;
    name: string;
    /** dollars, e.g. 16.99 */
    price: number;
    hidden: boolean;
    categoryIds: string[];
}

interface CloverListResponse<T> {
    elements?: T[];
    href?: string;
}

function cloverHeaders() {
    const token = process.env.CLOVER_API_TOKEN;
    if (!token) {
        throw new Error("Missing environment variable: CLOVER_API_TOKEN");
    }
    return {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
    };
}

function getMerchantId() {
    const merchantId = process.env.CLOVER_MERCHANT_ID;
    if (!merchantId) {
        throw new Error("Missing environment variable: CLOVER_MERCHANT_ID");
    }
    return merchantId;
}

async function cloverGet<T>(path: string): Promise<T> {
    const res = await fetch(`${CLOVER_API_BASE}${path}`, {
        headers: cloverHeaders(),
        // Always hit Clover directly, never a stale Next.js fetch cache.
        cache: "no-store",
    });
    if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`Clover API ${path} failed: ${res.status} ${res.statusText} — ${body.slice(0, 500)}`);
    }
    return res.json() as Promise<T>;
}

async function fetchAllPages<T>(basePath: string, params: string): Promise<T[]> {
    const out: T[] = [];
    let offset = 0;
    for (; ;) {
        const sep = params ? "&" : "";
        const page = await cloverGet<CloverListResponse<T>>(
            `${basePath}?${params}${sep}limit=${PAGE_LIMIT}&offset=${offset}`
        );
        const elements = page.elements ?? [];
        out.push(...elements);
        if (elements.length < PAGE_LIMIT) break;
        offset += PAGE_LIMIT;
    }
    return out;
}

interface RawCloverCategory {
    id: string;
    name: string;
}

interface RawCloverItem {
    id: string;
    name: string;
    price: number; // cents
    hidden?: boolean;
    categories?: { elements?: { id: string; name?: string }[] };
}

export async function fetchCloverMenu(): Promise<{
    categories: CloverCategory[];
    items: CloverItem[];
}> {
    const merchantId = getMerchantId();

    const [rawCategories, rawItems] = await Promise.all([
        fetchAllPages<RawCloverCategory>(`/merchants/${merchantId}/categories`, ""),
        fetchAllPages<RawCloverItem>(`/merchants/${merchantId}/items`, "expand=categories"),
    ]);

    const categoryNameById = new Map<string, string>();
    for (const c of rawCategories) {
        categoryNameById.set(c.id, c.name);
    }

    const categories: CloverCategory[] = rawCategories.map((c) => ({ id: c.id, name: c.name }));

    const items: CloverItem[] = rawItems
        .filter((i) => !i.hidden)
        .map((i) => ({
            id: i.id,
            name: i.name,
            price: Math.round((i.price ?? 0)) / 100,
            hidden: Boolean(i.hidden),
            categoryIds: (i.categories?.elements ?? []).map((c) => c.id),
        }));

    // Attach a resolved category name to each item via the id map, for
    // convenience at the call site.
    return { categories, items };
}

export function formatCloverPrice(dollars: number): string {
    return `$${dollars.toFixed(2)}`;
}
