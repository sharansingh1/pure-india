"use server";

import { Resend } from "resend";

const resend = new Resend("re_3dM7hua9_Cw15So97LLqTaeyU5MmDQG38");

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Missing fields" };
  }

  try {
    const data = await resend.emails.send({
      from: "Pure India Contact <onboarding@resend.dev>",
      to: "shranjeetsingh03@gmail.com",
      subject: `New Contact from ${name}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    if (data.error) {
      return { success: false, error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to send email" };
  }
}

