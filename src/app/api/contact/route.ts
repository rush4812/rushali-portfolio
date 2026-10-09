import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // In a real application, you would integrate Resend or Nodemailer here.
    // For this portfolio, we simulate a successful API call.
    // if (process.env.RESEND_API_KEY) { ... }

    console.log(`New contact message from ${name} (${email}): ${message}`);

    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
