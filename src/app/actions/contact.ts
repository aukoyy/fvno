'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: {
  firstName: string;
  lastName: string;
  email: string;
  mobile?: string;
  date?: string;
  message?: string;
}) {
  try {
    const { firstName, lastName, email, mobile, date, message } = formData;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return { success: false, error: 'Missing required fields' };
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'contact@resend.dev',
      to: 'oyvind.auk@gmail.com',
      subject: 'Ny henvendelse fra nettsiden 🎉',
      html: `
        <h2>Ny henvendelse fra nettsiden</h2>
        <p><strong>Navn:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${mobile || 'Ikke oppgitt'}</p>
        <p><strong>Dato:</strong> ${date || 'Ikke oppgitt'}</p>
        <p><strong>Melding:</strong></p>
        <p>${message || 'Ingen melding'}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}