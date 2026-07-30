// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return NextResponse.json(
        { error: 'Server misconfiguration: Missing Resend API key.' },
        { status: 500 }
      );
    }

    // Lazy instantiate Resend inside request scope
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, organization, inquiryType, howHeard, message, websiteUrl } = body;

    // 1. Honeypot check - silently return success for bot submissions
    if (websiteUrl) {
      return NextResponse.json({ success: true, message: 'Message processed' });
    }

    // 2. Server-side validation check
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (Name, Email, Inquiry Type, or Message).' },
        { status: 400 }
      );
    }

    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    if (!fromEmail || !toEmail) {
      console.error('Missing FROM_EMAIL or TO_EMAIL environment variables.');
      return NextResponse.json(
        { error: 'Server misconfiguration: Recipient or sender email is missing.' },
        { status: 500 }
      );
    }

    // 3. Send email via Resend API
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `[${inquiryType}] New Inquiry from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #181818; background-color: #ffffff; border: 1px solid #e5e5e5; border-radius: 12px;">
          <h2 style="color: #FF1900; font-size: 20px; font-weight: 700; margin-top: 0; margin-bottom: 16px; border-bottom: 2px solid #FF1900; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; width: 140px; color: #666666; font-size: 14px;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 500; font-size: 14px; color: #111111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #666666; font-size: 14px;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 500; font-size: 14px;"><a href="mailto:${email}" style="color: #FF1900; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #666666; font-size: 14px;">Inquiry Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 500; font-size: 14px; color: #111111;">${inquiryType}</td>
            </tr>
            ${
              organization
                ? `<tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #666666; font-size: 14px;">Organization:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 500; font-size: 14px; color: #111111;">${organization}</td>
                  </tr>`
                : ''
            }
            ${
              howHeard
                ? `<tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #666666; font-size: 14px;">How Heard:</td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 500; font-size: 14px; color: #111111;">${howHeard}</td>
                  </tr>`
                : ''
            }
          </table>

          <div style="background-color: #f9f9f9; padding: 16px; border-radius: 8px; border: 1px solid #eaeaea;">
            <p style="font-weight: 600; margin-top: 0; margin-bottom: 8px; font-size: 14px; color: #444444;">Message:</p>
            <p style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #222222; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend delivery error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error('Unhandled server error in /api/contact:', err);
    return NextResponse.json(
      { error: 'An unexpected internal error occurred.' },
      { status: 500 }
    );
  }
}