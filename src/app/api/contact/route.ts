/* import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, mobile, date, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'Full Vase <kontakt@fullvase.no>', // Use your verified domain
      to: ['oyvind.auk@gmail.com'], // Your email
      subject: 'Ny henvendelse fra fullvase.no',
      html: `
        <h2>Ny henvendelse fra kontaktskjema</h2>
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Navn:</strong> ${firstName} ${lastName}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Mobilnummer:</strong> ${mobile || 'Ikke oppgitt'}</p>
          <p><strong>Ønsket dato:</strong> ${date || 'Ikke oppgitt'}</p>
          <p><strong>Melding:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message || 'Ingen melding oppgitt'}
          </div>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Denne meldingen ble sendt fra kontaktskjemaet på fullvase.no
          </p>
        </div>
      `,
      // Also send a copy to the customer
      replyTo: email,
    });

    console.log('Email sent successfully:', emailData);

    return NextResponse.json(
      { message: 'Melding sendt!', emailId: emailData.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Kunne ikke sende e-post' },
      { status: 500 }
    );
  }
} */