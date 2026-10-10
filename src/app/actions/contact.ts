"use server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Spam detected").optional() // Spam protection
});

export async function submitContact(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("honeypot")
    };

    const validated = contactSchema.parse(rawData);

    // If honeypot is filled out, silently succeed to trick the bot
    if (validated.honeypot) {
      return { success: true, message: "Message securely transmitted." };
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      if (process.env.NODE_ENV === "development") {
        console.warn("⚠️  Nodemailer credentials missing. Simulating successful form submission for local testing.");
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network latency
        return { success: true, message: "Message securely transmitted. (Simulated Local Test)" };
      }
      throw new Error("Email configuration is missing on server.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: "rushjivrajani48@gmail.com",
      subject: `New Message from ${validated.name}`,
      text: `Name: ${validated.name}\nEmail: ${validated.email}\nMessage: ${validated.message}`,
      html: `
        <div style="font-family: sans-serif; p-4 bg-gray-100">
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${validated.name}</p>
          <p><strong>Email:</strong> ${validated.email}</p>
          <p><strong>Message:</strong><br/> ${validated.message}</p>
        </div>
      `,
    });

    return { 
      success: true, 
      message: "Message securely transmitted. I will get back to you shortly." 
    };
  } catch (error: any) {
    console.error("Contact Form Error:", error);
    if (error instanceof z.ZodError || error.name === "ZodError") {
      const msg = error.issues?.[0]?.message || error.errors?.[0]?.message || "Invalid form data";
      return { success: false, message: msg };
    }
    return { success: false, message: "Transmission failed. Please try again later." };
  }
}
