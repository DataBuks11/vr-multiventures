export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const {
      name,
      company = 'Not specified',
      contact,
      serviceType = 'Mobile Tower Parts Transportation',
      urgency = 'Scheduled Project Window',
      message = 'No additional notes provided.',
    } = body || {};

    if (!name || !contact) {
      return res.status(400).json({
        error: 'Please provide both Name and Contact details (phone/email).',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not configured.');
      return res.status(500).json({
        error: 'Email service is temporarily unconfigured.',
      });
    }
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'piyushjunghare635@gmail.com';
    const fromAddress = process.env.RESEND_FROM || 'VR Multiventures <onboarding@resend.dev>';

    // Check if contact looks like an email to set reply-to
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim());
    const isPhone = /^[+0-9\s-]{8,16}$/.test(contact.trim());

    const timestampIST = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Dispatch Requirement - VR Multiventures</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0c10; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e5e7eb;">
  <div style="max-width: 620px; margin: 30px auto; background-color: #12141a; border: 1px solid #232733; border-radius: 4px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    
    <!-- Top Header Strip -->
    <div style="background: linear-gradient(135deg, #181b24 0%, #0e1017 100%); border-bottom: 2px solid #ff5500; padding: 24px 28px;">
      <div style="font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #ff5500; font-weight: 700; margin-bottom: 6px;">
        VR MULTIVENTURES &bull; DISPATCH CONTROL DESK
      </div>
      <h1 style="margin: 0; font-size: 22px; font-weight: 500; color: #ffffff; letter-spacing: -0.02em;">
        New Inbound Logistics Requirement
      </h1>
      <div style="font-size: 12px; color: #8a92a6; margin-top: 6px;">
        Received: ${timestampIST} (IST)
      </div>
    </div>

    <!-- Main Content -->
    <div style="padding: 28px;">
      
      <!-- Primary Info Table -->
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 12px 14px; background-color: #1a1d26; border: 1px solid #282c3a; color: #8e96a8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 34%;">
            Client Name
          </td>
          <td style="padding: 12px 14px; background-color: #151821; border: 1px solid #282c3a; color: #ffffff; font-size: 15px; font-weight: 600;">
            ${name}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; background-color: #1a1d26; border: 1px solid #282c3a; color: #8e96a8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
            Company / Organization
          </td>
          <td style="padding: 12px 14px; background-color: #151821; border: 1px solid #282c3a; color: #ffffff; font-size: 14px;">
            ${company || 'Individual / Direct'}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; background-color: #1a1d26; border: 1px solid #282c3a; color: #8e96a8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
            Contact Info
          </td>
          <td style="padding: 12px 14px; background-color: #151821; border: 1px solid #282c3a; color: #ff5500; font-size: 15px; font-weight: 600;">
            ${isPhone ? `<a href="tel:${contact.trim()}" style="color: #ff5500; text-decoration: none;">📞 ${contact}</a>` : ''}
            ${isEmail ? `<a href="mailto:${contact.trim()}" style="color: #ff5500; text-decoration: none;">✉️ ${contact}</a>` : ''}
            ${!isPhone && !isEmail ? contact : ''}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; background-color: #1a1d26; border: 1px solid #282c3a; color: #8e96a8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
            Service Required
          </td>
          <td style="padding: 12px 14px; background-color: #151821; border: 1px solid #282c3a; color: #ffffff; font-size: 14px;">
            ${serviceType}
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; background-color: #1a1d26; border: 1px solid #282c3a; color: #8e96a8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
            Operational Urgency
          </td>
          <td style="padding: 12px 14px; background-color: #151821; border: 1px solid #282c3a; color: #fbbf24; font-size: 13px; font-weight: 500;">
            ${urgency}
          </td>
        </tr>
      </table>

      <!-- Message / Requirement Details -->
      <div style="background-color: #181b24; border: 1px solid #282c3a; border-left: 3px solid #ff5500; padding: 18px 20px; border-radius: 2px; margin-bottom: 26px;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #8e96a8; margin-bottom: 8px;">
          Requirement Notes & Site Logistics
        </div>
        <div style="font-size: 14px; line-height: 1.6; color: #f3f4f6; white-space: pre-wrap;">
          ${message || 'No detailed specifications entered.'}
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div style="display: flex; gap: 12px; margin-bottom: 10px;">
        ${
          isPhone
            ? `<a href="tel:${contact.trim()}" style="display: inline-block; background-color: #ff5500; color: #ffffff; text-decoration: none; padding: 10px 18px; font-size: 13px; font-weight: 600; border-radius: 3px; letter-spacing: 0.05em; text-transform: uppercase;">Call Client Now</a>`
            : ''
        }
        ${
          isEmail
            ? `<a href="mailto:${contact.trim()}?subject=Re:%20VR%20Multiventures%20Inquiry" style="display: inline-block; background-color: #232733; color: #ffffff; text-decoration: none; padding: 10px 18px; font-size: 13px; font-weight: 600; border-radius: 3px; border: 1px solid #3d4355; letter-spacing: 0.05em; text-transform: uppercase;">Reply by Email</a>`
            : ''
        }
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color: #0b0c10; border-top: 1px solid #1c1f2b; padding: 16px 28px; text-align: center; font-size: 11px; color: #6b7280;">
      VR Multiventures &bull; 42, Solanki Patil wadi, Bidipeth road, Near Sakkardara talao, Nagpur &bull; +91 8668406011
    </div>

  </div>
</body>
</html>
`;

    const resendPayload = {
      from: fromAddress,
      to: [recipientEmail],
      subject: `New Requirement: ${name} (${company || 'Individual'}) - ${serviceType}`,
      html: htmlContent,
    };

    if (isEmail) {
      resendPayload.reply_to = contact.trim();
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API Error:', resendData);
      return res.status(resendResponse.status).json({
        error: resendData.message || 'Failed to dispatch notification email via Resend.',
        details: resendData,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry registered and notification email dispatched successfully.',
      id: resendData.id,
    });
  } catch (err) {
    console.error('API /api/contact Exception:', err);
    return res.status(500).json({
      error: 'An internal error occurred while processing the inquiry.',
      message: err.message,
    });
  }
}
