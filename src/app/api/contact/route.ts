import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// If you get a type error for 'nodemailer', add a file (e.g., nodemailer.d.ts) with: declare module 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, inquiryType, message } = await req.json();
    if (!name || !phone || !inquiryType) {
      return NextResponse.json({ error: 'Name, phone, and inquiry type are required.' }, { status: 400 });
    }

    // Configure nodemailer transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // App password (not your Gmail password)
      },
    });

    const logoUrl = process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png` : 'http://localhost:3000/logo.png';
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'sumandent2205@gmail.com',
      subject: `New Contact Inquiry: ${inquiryType}`,
      text: `You have a new inquiry from your Suman Dental Hospital website:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\nType: ${inquiryType}\nMessage: ${message || 'Not provided'}`,
      html: `
      <div style="background:#f7f8fa;padding:32px 0;min-height:100vh;font-family:'Segoe UI',Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;margin:0 auto;background:#fff;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,0.07);overflow:hidden;">
          <tr>
            <td style="text-align:center;padding:32px 32px 16px 32px;background:#fff;">
              <img src='${logoUrl}' alt="Suman Dental Clinic Logo" style="width:80px;height:auto;margin-bottom:12px;"/>
              <h1 style="font-size:1.5rem;color:#1e293b;margin:0 0 8px 0;">New Inquiry from Suman Dental Hospital</h1>
              <p style="color:#64748b;font-size:1rem;margin:0 0 16px 0;">You have received a new contact form submission.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa;border-radius:12px;padding:16px;">
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#0f172a;width:120px;">Name:</td>
                  <td style="padding:8px 0;color:#334155;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#0f172a;">Phone:</td>
                  <td style="padding:8px 0;color:#334155;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#0f172a;">Email:</td>
                  <td style="padding:8px 0;color:#334155;">${email || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#0f172a;">Type:</td>
                  <td style="padding:8px 0;color:#334155;">${inquiryType}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;font-weight:600;color:#0f172a;vertical-align:top;">Message:</td>
                  <td style="padding:8px 0;color:#334155;">${message ? message.replace(/\n/g, '<br/>') : 'Not provided'}</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px 32px;text-align:center;">
              <div style="margin-top:24px;color:#64748b;font-size:0.95rem;">This email was sent from the <b>Suman Dental Hospital</b> website.<br>Thank you for using our services!</div>
            </td>
          </tr>
        </table>
      </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
} 