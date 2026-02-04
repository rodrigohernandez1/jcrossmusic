import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {  fname, lname, email, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.MY_PERSONAL_EMAIL, // Your hidden email
      subject: `WEBSITE REQUEST FROM: ${fname} ${lname}`,
      html: `<p><strong>From:</strong> ${email}</p><p><strong>Name:</strong> ${fname} ${lname}</p><p>${message}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}