"use server";
import { z } from "zod";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

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

    // If honeypot is filled out, silently succeed to trick spam bots
    if (validated.honeypot) {
      return { success: true, message: "Message securely transmitted." };
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      if (process.env.NODE_ENV === "development") {
        console.warn("⚠️  Nodemailer credentials missing. Simulating successful form submission for local testing.");
        await new Promise(resolve => setTimeout(resolve, 1500));
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

    // Check for Resume attachment
    const resumePath = path.join(process.cwd(), "public", "resume.pdf");
    const resumeExists = fs.existsSync(resumePath);
    const resumeAttachments = resumeExists
      ? [
          {
            filename: "Rushali_Jivrajani_Resume.pdf",
            content: fs.readFileSync(resumePath),
            contentType: "application/pdf",
          },
        ]
      : [];

    const ownerEmail = process.env.EMAIL_USER;
    const currentYear = new Date().getFullYear();

    // -------------------------------------------------------------
    // 1. NOTIFICATION EMAIL TO RUSHALI
    // -------------------------------------------------------------
    const ownerHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f17; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0b0f17; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #111827; border: 1px solid #1f293d; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #111827 0%, #1a2236 100%); border-bottom: 2px solid #00f0ff;">
              <div style="font-family: monospace; font-size: 11px; letter-spacing: 2px; color: #00f0ff; text-transform: uppercase; font-weight: 600; margin-bottom: 6px;">
                &gt;_ PORTFOLIO INQUIRY RECEIVED
              </div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                New Message from ${validated.name}
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px; background-color: #1a2236; border: 1px solid #2a3550; border-radius: 8px;">
                    <div style="font-size: 11px; font-family: monospace; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Sender Name</div>
                    <div style="font-size: 16px; font-weight: 700; color: #ffffff;">${validated.name}</div>
                  </td>
                </tr>
                <tr><td height="12"></td></tr>
                <tr>
                  <td style="padding: 14px 18px; background-color: #1a2236; border: 1px solid #2a3550; border-radius: 8px;">
                    <div style="font-size: 11px; font-family: monospace; color: #94a3b8; text-transform: uppercase; margin-bottom: 4px;">Sender Email</div>
                    <div>
                      <a href="mailto:${validated.email}" style="color: #00f0ff; text-decoration: none; font-size: 15px; font-weight: 600;">${validated.email}</a>
                    </div>
                  </td>
                </tr>
              </table>

              <div style="margin-bottom: 28px;">
                <div style="font-size: 11px; font-family: monospace; color: #94a3b8; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 1px;">
                  Message Content:
                </div>
                <div style="padding: 18px 20px; background-color: #0d121f; border-left: 3px solid #00f0ff; border-radius: 4px; font-size: 15px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${validated.message}</div>
              </div>

              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${validated.email}?subject=Re:%20Inquiry%20from%20Portfolio" style="display: inline-block; padding: 14px 32px; background-color: #00f0ff; color: #000000; font-size: 14px; font-weight: 700; text-decoration: none; border-radius: 8px; letter-spacing: 0.5px; text-transform: uppercase; font-family: monospace;">
                      Reply Directly to ${validated.name} &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding: 20px 32px; background-color: #0d121f; border-top: 1px solid #1f293d; text-align: center;">
              <p style="margin: 0; font-size: 12px; font-family: monospace; color: #64748b;">
                Sent via <a href="https://rushali-jivrajani.vercel.app" style="color: #94a3b8; text-decoration: none;">rushali-jivrajani.vercel.app</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // -------------------------------------------------------------
    // 2. AUTO-REPLY CONFIRMATION EMAIL TO SENDER (WITH RESUME)
    // -------------------------------------------------------------
    const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Getting in Touch — Rushali Jivrajani</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f17; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0b0f17; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #111827; border: 1px solid #1f293d; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <tr>
            <td style="padding: 32px; background: linear-gradient(135deg, #111827 0%, #1a2236 100%); border-bottom: 2px solid #00f0ff;">
              <div style="font-family: monospace; font-size: 11px; letter-spacing: 2px; color: #00f0ff; text-transform: uppercase; font-weight: 600; margin-bottom: 6px;">
                &gt;_ FULL STACK DEVELOPER
              </div>
              <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                Rushali Jivrajani
              </h1>
              <p style="margin: 0; font-size: 13px; color: #94a3b8; font-family: monospace;">
                Next.js &bull; React &bull; Node.js &bull; Databases (PostgreSQL, MongoDB, MySQL)
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #ffffff; font-weight: 700;">
                Hi ${validated.name},
              </h2>
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: #cbd5e1;">
                Thank you for reaching out through my portfolio website! Whether you are a recruiter, engineering manager, or company looking to hire — I am glad to connect with you.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #cbd5e1;">
                I am actively open to <strong style="color: #00f0ff;">Full Stack Developer</strong> roles. I love building high-performance web applications, scalable APIs, and clean user interfaces.
              </p>

              <!-- Reference of their message if any -->
              <div style="margin: 20px 0; padding: 16px 20px; background-color: #0d121f; border-left: 3px solid #00f0ff; border-radius: 4px;">
                <div style="font-size: 11px; font-family: monospace; color: #94a3b8; text-transform: uppercase; margin-bottom: 6px;">
                  Your Note / Inquiry:
                </div>
                <div style="font-size: 14px; line-height: 1.5; color: #e2e8f0; font-style: italic;">
                  &ldquo;${validated.message}&rdquo;
                </div>
              </div>

              <!-- Profile & Qualifications Overview -->
              <div style="margin: 24px 0; padding: 20px; background-color: #1a2236; border: 1px solid #2a3550; border-radius: 8px;">
                <div style="font-size: 11px; font-family: monospace; color: #00f0ff; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">
                  🚀 About My Technical Expertise
                </div>
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; color: #94a3b8; line-height: 1.6;">
                  <tr>
                    <td style="padding: 5px 0; width: 120px; font-weight: 600; color: #ffffff;">Target Role:</td>
                    <td style="padding: 5px 0; color: #e2e8f0;"><strong style="color: #00f0ff;">Full Stack Developer</strong> (Frontend &amp; Backend)</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; font-weight: 600; color: #ffffff;">Frontend:</td>
                    <td style="padding: 5px 0; color: #e2e8f0;">Next.js, React.js, TypeScript, Tailwind CSS, Framer Motion</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; font-weight: 600; color: #ffffff;">Backend &amp; APIs:</td>
                    <td style="padding: 5px 0; color: #e2e8f0;">Node.js, Express, RESTful APIs, Server Actions</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; font-weight: 600; color: #ffffff;">Databases:</td>
                    <td style="padding: 5px 0; color: #e2e8f0;">PostgreSQL, MySQL, MongoDB</td>
                  </tr>
                  <tr>
                    <td style="padding: 5px 0; font-weight: 600; color: #ffffff;">Education:</td>
                    <td style="padding: 5px 0; color: #e2e8f0;">Master of Computer Application (MCA)</td>
                  </tr>
                </table>
              </div>

              <!-- Resume Attached Note -->
              <div style="margin-bottom: 24px; padding: 16px 20px; background-color: rgba(0, 240, 255, 0.08); border: 1px dashed #00f0ff; border-radius: 8px;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td width="32" valign="top" style="font-size: 22px; padding-top: 2px;">📎</td>
                    <td style="font-size: 14px; color: #e2e8f0; line-height: 1.5;">
                      <strong style="color: #ffffff;">Resume Attached:</strong> If you are looking to hire, please find my updated Resume attached with this email (<span style="color: #00f0ff; font-family: monospace;">Rushali_Jivrajani_Resume.pdf</span>).
                      <br/>
                      <a href="https://rushali-jivrajani.vercel.app/resume.pdf" style="color: #00f0ff; text-decoration: underline; font-size: 12px; font-family: monospace; display: inline-block; margin-top: 6px;">
                        Direct PDF Link &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Next Steps & Direct Contact -->
              <div style="margin-bottom: 24px; font-size: 14px; line-height: 1.6; color: #cbd5e1;">
                I would be delighted to discuss how my skill set and quick-learning ability can contribute to your team or project. You can directly reply to this email, or connect via:
              </div>

              <!-- Quick Links Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td align="center">
                    <a href="https://rushali-jivrajani.vercel.app" style="display: inline-block; margin: 4px; padding: 10px 20px; background-color: #00f0ff; color: #000000; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 6px; font-family: monospace;">
                      Live Portfolio &rarr;
                    </a>
                    <a href="https://linkedin.com/in/rushali-jivrajani" style="display: inline-block; margin: 4px; padding: 10px 20px; background-color: #1e293b; color: #ffffff; border: 1px solid #334155; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 6px; font-family: monospace;">
                      LinkedIn
                    </a>
                    <a href="https://github.com/rush4812" style="display: inline-block; margin: 4px; padding: 10px 20px; background-color: #1e293b; color: #ffffff; border: 1px solid #334155; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 6px; font-family: monospace;">
                      GitHub
                    </a>
                    <a href="tel:+919099538086" style="display: inline-block; margin: 4px; padding: 10px 20px; background-color: #1e293b; color: #ffffff; border: 1px solid #334155; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 6px; font-family: monospace;">
                      +91 90995 38086
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Sign-off -->
              <div style="border-top: 1px solid #1f293d; padding-top: 20px; font-size: 14px; color: #cbd5e1; line-height: 1.5;">
                Looking forward to hearing from you,<br/>
                <strong style="color: #ffffff; font-size: 16px; display: inline-block; margin-top: 4px;">Rushali Jivrajani</strong><br/>
                <span style="font-size: 13px; color: #94a3b8;">Full Stack Developer</span><br/>
                <span style="font-size: 12px; font-family: monospace; color: #64748b;">rushjivrajani48@gmail.com &bull; +91 90995 38086</span>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding: 16px 32px; background-color: #0d121f; border-top: 1px solid #1f293d; text-align: center;">
              <p style="margin: 0; font-size: 11px; font-family: monospace; color: #64748b;">
                &copy; ${currentYear} Rushali Jivrajani &bull; rushali-jivrajani.vercel.app
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // Send both emails in parallel
    await Promise.all([
      // 1. Email to Rushali
      transporter.sendMail({
        from: `"Portfolio Contact" <${ownerEmail}>`,
        to: "rushjivrajani48@gmail.com",
        replyTo: `"${validated.name}" <${validated.email}>`,
        subject: `⚡ New Inquiry from ${validated.name}`,
        text: `Name: ${validated.name}\nEmail: ${validated.email}\nMessage: ${validated.message}`,
        html: ownerHtml,
      }),

      // 2. Auto-responder to the sender with Resume attachment
      transporter.sendMail({
        from: `"Rushali Jivrajani" <${ownerEmail}>`,
        to: validated.email,
        subject: `Rushali Jivrajani — Full Stack Developer (Resume & Portfolio Attached)`,
        text: `Hi ${validated.name},\n\nThank you for reaching out through my portfolio website! Whether you are a recruiter, engineering manager, or company looking to hire — I am glad to connect.\n\nI have attached my updated resume (Rushali_Jivrajani_Resume.pdf) for your consideration.\n\nBest regards,\nRushali Jivrajani\nFull Stack Developer\n+91 90995 38086`,
        html: clientHtml,
        attachments: resumeAttachments,
      }),
    ]);

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
