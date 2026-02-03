import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Helper to add contact to Brevo
async function addToBrevo(name: string, email: string) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);

    if (!apiKey) {
      console.warn('Brevo API Key missing. Skipping Brevo sync.');
      return;
    }

    // Split name for attributes
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    const payload = {
      email,
      attributes: {
        FNAME: firstName,
        LNAME: lastName,
        FULLNAME: name
      },
      updateEnabled: true,
      listIds: listId ? [listId] : []
    };

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to add to Brevo:', errorData);
      // We don't throw here so the user request still succeeds (resilience)
    } else {
      console.log(`Successfully added ${email} to Brevo list ${listId}`);
    }

  } catch (error) {
    console.error('Error in addToBrevo:', error);
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, waitlistType } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // Parallel Execution: Send Admin Email AND Add to Brevo
    // We start both promises
    const emailPromise = (async () => {
      try {
        const apiKey = process.env.BREVO_API_KEY;
        if (!apiKey) {
          console.warn('Brevo API Key missing. Skipping email notification.');
          return;
        }

        const emailPayload = {
          sender: {
            name: 'Event Pal Waitlist',
            email: process.env.BREVO_EMAIL || 'info@eventpal.ca'
          },
          to: [
            {
              email: process.env.CONTACT_EMAIL || 'info@eventpal.ca',
              name: 'Admin'
            }
          ],
          replyTo: {
            email: email,
            name: name
          },
          subject: `New ${waitlistType || 'Waitlist'} Signup`,
          htmlContent: `
  <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f6f8fb; padding: 24px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 6px; padding: 24px; border: 1px solid #e5e7eb;">
      
      <h2 style="margin: 0 0 16px; font-size: 20px; color: #111827;">
        New Waitlist Signup
      </h2>

      <p style="margin: 0 0 12px; font-size: 14px; color: #374151;">
        A new user has joined the waitlist. Details are below:
      </p>

      <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #374151;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; width: 120px;">Name</td>
          <td style="padding: 8px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">Email</td>
          <td style="padding: 8px 0;">${email}</td>
        </tr>
      </table>

      <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

      <p style="margin: 0; font-size: 12px; color: #6b7280;">
        This contact has been successfully added to your Brevo list
        (List ID: ${process.env.BREVO_LIST_ID}).
      </p>

    </div>
  </div>
`
        };

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'api-key': apiKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('❌ Brevo Email API FAILED:', errorData);
        } else {
          const result = await response.json();
          console.log('✅ Email notification sent successfully via Brevo API:', result.messageId);
        }
      } catch (err: any) {
        console.error('❌ EMAIL SENDING FAILED. DETAILS:', err);
      }
    })();

    const brevoPromise = addToBrevo(name, email);

    // Wait for both to complete
    await Promise.allSettled([emailPromise, brevoPromise]);

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
