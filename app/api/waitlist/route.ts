import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { name, email, waitlistType } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"Event Pal Waitlist" <${process.env.BREVO_EMAIL}>`,
      to: 'info@eventpal.ca',
      replyTo: email,
      subject: `New ${waitlistType || 'Waitlist'} Signup`,
      html: `
        <div style="font-family: sans-serif;">
          <h2>New Waitlist Signup 🚀</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Waitlist:</strong> ${waitlistType || 'General'}</p>
        </div>
      `
    });

    return NextResponse.json(
      { message: 'Added to waitlist successfully!' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error processing waitlist signup:', error);
    return NextResponse.json(
      { error: 'Failed to add to waitlist. Please try again later.' },
      { status: 500 }
    );
  }
}
