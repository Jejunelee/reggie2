// app/api/send-email/route.ts (App Router)
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'leejejune@gmail.com';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <send@iamreggieaspiras.com>', // Replace with your verified domain
      to: [CONTACT_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #b88746; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f6f0; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #b88746; display: block; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e0d6c8; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0d6c8; font-size: 12px; color: #666; text-align: center; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">Message</span>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              <div class="footer">
                <p>This message was sent from your website's contact form.</p>
                <p>Reply directly to <a href="mailto:${email}">${email}</a> to respond to the sender.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        ---
        Reply to: ${email}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}