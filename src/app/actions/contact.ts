'use server';

import { Resend } from 'resend';

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

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return { success: false, error: 'Email service not configured' };
    }

    // Initialize Resend inside the function to avoid module-level errors
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return { success: false, error: 'Missing required fields' };
    }

    // console.log('Attempting to send email with Resend...');

    // Send email using Resend
    const environment = process.env.NODE_ENV || 'development';
    const recipientEmail = environment === 'production' ? 'admin@fullvase.no' : 'oyvind.auk@gmail.com';
    const result = await resend.emails.send({
      from: 'contact@resend.dev',
      to: recipientEmail,
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

    // console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error) {
    console.error('Detailed error sending email:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('Invalid API key')) {
        return { success: false, error: 'Invalid email API key' };
      }
      if (error.message.includes('rate limit')) {
        return { success: false, error: 'Rate limit exceeded' };
      }
    }
    
    return { success: false, error: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` };
  }
}