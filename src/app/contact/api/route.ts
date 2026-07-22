import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with key from server environment
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      organization,
      inquiryType,
      howHeard,
      message,
      websiteUrl // Honeypot field
    } = body;

    // 1. Honeypot check: If the hidden 'websiteUrl' field is filled out, reject quietly (bot detected)
    if (websiteUrl) {
      return NextResponse.json({ success: true, message: "Submission received" }, { status: 200 });
    }

    // 2. Server-side validation
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message exceeds 2000 character limit' },
        { status: 400 }
      );
    }

    // 3. Format email output for internal notifications
    const formattedEmailHtml = `
      <h2>New Contact Submission from DSS Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
      <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
      <p><strong>How Did They Hear About Us:</strong> ${howHeard || 'N/A'}</p>
      <hr />
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
    `;

    // 4. Send email via Resend API
    const toEmail = process.env.CONTACT_FORM_RECIPIENT || 'contact@digitalsportssolutions.com';
    const fromDomain = process.env.RESEND_SENDER_DOMAIN || 'onboarding@resend.dev';

    const resendResult = await resend.emails.send({
      from: `DSS Contact Form <${fromDomain}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Inquiry: ${inquiryType} - ${name}`,
      html: formattedEmailHtml,
    });

    if (resendResult.error) {
      console.error('Resend API Error:', resendResult.error);
      return NextResponse.json(
        { error: 'Failed to deliver message via provider' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Contact route internal error:', error);
    return NextResponse.json(
      { error: 'An unexpected server error occurred.' },
      { status: 500 }
    );
  }
}