import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Analytics } from "@vercel/analytics/next"

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const logoUrl = "https://www.volterraenergy.in/images/website_logo.png";

const {
  fullName,
  company,
  phone,
  email,
  streetAddress,
  city,
  state,
  businessType,
  requirements,
} = body;
    

  const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

await transporter.verify();
console.log("SMTP Connected Successfully.");

    // ==========================
    // Email to Admin
    // ==========================

await transporter.sendMail({
  from: `"VOLTERRA Website" <${process.env.SMTP_USER}>`,
  to: process.env.ADMIN_EMAIL,
  subject: "New site survey request",

  html: `
  <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">


 <!-- Logo header -->
<div style="background:#0f172a;padding:32px 24px;text-align:center;border-bottom:1px solid #1e293b;">

  <img
    src="${logoUrl}"
    alt="VOLTERRA Energy"
    style="
      display:block;
      margin:0 auto;
      width:280px;
      max-width:100%;
      height:auto;
      object-fit:contain;
    "
  />

</div>

    <div style="height:4px;background:linear-gradient(90deg,#16a34a,#84cc16);"></div>

    <div style="padding:28px;">
      <h2 style="margin:0 0 8px;color:#111827;">New site survey request</h2>
      <p style="margin:0 0 24px;color:#6b7280;">
        A new enquiry has been submitted from the VOLTERRA Energy website.
      </p>

      <h3 style="color:#111827;margin:0 0 16px;">Customer details</h3>

      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;width:35%;">Full Name</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;">Company</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">${company || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;">Phone</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">${phone}</td>
        </tr>
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;">Email</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">${email}</td>
        </tr>
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;">Business Type</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">${businessType}</td>
        </tr>
      </table>

      <h3 style="color:#111827;margin:28px 0 16px;">Address information</h3>

      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;width:35%;">Street Address</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">${streetAddress}</td>
        </tr>
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;">City</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">${city}</td>
        </tr>
        <tr>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#374151;">State</td>
          <td style="padding:12px;border-bottom:1px solid #e5e7eb;color:#111827;">${state}</td>
        </tr>
        <tr>
          <td style="padding:12px;font-weight:600;color:#374151;">Complete Address</td>
          <td style="padding:12px;color:#111827;">${streetAddress}, ${city}, ${state}</td>
        </tr>
      </table>

      <h3 style="color:#111827;margin:28px 0 16px;">Project requirements</h3>

      <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:18px;color:#374151;line-height:1.8;">
        ${requirements}
      </div>
    </div>

    <div style="background:#f8fafc;padding:18px;text-align:center;font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;">
      VOLTERRA Energy website enquiry notification
    </div>
  </div>
  `,
});
    // ==========================
    // Confirmation Email
    // ==========================


await transporter.sendMail({
  from: `"VOLTERRA Energy" <${process.env.SMTP_USER}>`,
  to: email,
  subject: "Thank you for contacting VOLTERRA Energy",

  html: `
  <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">

 <!-- Logo header -->
<div style="background:#0f172a;padding:32px 24px;text-align:center;border-bottom:1px solid #1e293b;">

  <img
    src="${logoUrl}"
    alt="VOLTERRA Energy"
    style="
      display:block;
      margin:0 auto;
      width:280px;
      max-width:100%;
      height:auto;
      object-fit:contain;
    "
  />

</div>

    <div style="height:4px;background:linear-gradient(90deg,#16a34a,#84cc16);"></div>

    <div style="padding:32px;">
      <h2 style="margin:0 0 18px;color:#111827;font-size:26px;">Thank you for your enquiry</h2>

      <p style="font-size:16px;color:#111827;">
        Dear <strong>${fullName}</strong>,
      </p>

      <p style="font-size:15px;line-height:1.8;color:#374151;">
        We have successfully received your site survey request. Our EV charging solutions team is reviewing your requirements and will contact you shortly.
      </p>

      <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:18px;margin:24px 0;">
        <h3 style="margin:0 0 12px;color:#111827;">Request summary</h3>
        <p style="margin:6px 0;color:#374151;"><strong>Business Type:</strong> ${businessType}</p>
        <p style="margin:6px 0;color:#374151;"><strong>Location:</strong> ${city}, ${state}</p>
      </div>

      <p style="font-size:15px;line-height:1.8;color:#374151;">
        Our team will contact you within <strong>24 hours</strong> to discuss your project and recommend the most suitable EV charging solution.
      </p>

      <div style="background:#f9fafb;border-radius:12px;padding:18px;margin-top:24px;">
        <p style="margin:8px 0;">📞 <strong>+91 80954 34443</strong></p>
        <p style="margin:8px 0;">✉️ <strong>info@volterraenergy.in</strong></p>
        <p style="margin:8px 0;">📍 Bangalore, Karnataka, India</p>
      </div>

      <p style="margin-top:28px;color:#374151;">
        We appreciate your interest in VOLTERRA Energy and look forward to helping you build a reliable and future-ready EV charging infrastructure.
      </p>

      <p style="margin-top:24px;color:#111827;">
        Best regards,<br/>
        <strong>VOLTERRA Energy Team</strong>
      </p>
    </div>

    <div style="background:#f8fafc;padding:18px;text-align:center;font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;">
      This is an automated confirmation email from VOLTERRA Energy.
    </div>
  </div>
  `,
});

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
 } catch (error) {
  console.error("========== EMAIL ERROR ==========");
  console.error(error);
  console.error("=================================");

  return NextResponse.json(
    {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    },
    {
      status: 500,
    }
  );
}
}