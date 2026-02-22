import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' });
  }

  const { name, email, service, date, message } = req.body || {};

  // Grundvalidierung
  if (
    !name ||
    typeof name !== 'string' ||
    !email ||
    typeof email !== 'string' ||
    !message ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({ ok: false, error: 'MISSING_FIELDS' });
  }

  // E-Mail-Format grob prüfen
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: 'INVALID_EMAIL' });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_RECIPIENT,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECIPIENT) {
    return res.status(500).json({ ok: false, error: 'SMTP_NOT_CONFIGURED' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"KIRAL BAU – Website" <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      replyTo: email || undefined,
      subject: `KIRAL BAU – neue Anfrage (${service || 'Allgemeine Anfrage'})`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email || '-'}`,
        `Leistung: ${service || '-'}`,
        `Wunschtermin: ${date || '-'}`,
        '',
        'Nachricht:',
        message || '-',
      ].join('\n'),
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #0f172a; background:#f1f5f9; padding:24px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
            <tr>
              <td style="background:#0f172a;color:#e5f2ff;padding:18px 24px;font-size:18px;font-weight:600;">
                Neue Anfrage über das Kontaktformular von KIRAL BAU – ${service || 'Allgemeine Anfrage'}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px;">
                <p style="margin:0 0 12px 0;font-size:14px;color:#64748b;">Es wurde eine neue Anfrage über das Kontaktformular der KIRAL&nbsp;BAU Website gesendet:</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;">
                  <tr>
                    <td style="padding:6px 0;width:140px;font-weight:600;color:#0f172a;">Name</td>
                    <td style="padding:6px 0;color:#0f172a;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;width:140px;font-weight:600;color:#0f172a;">E-Mail</td>
                    <td style="padding:6px 0;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email || '-'}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;width:140px;font-weight:600;color:#0f172a;">Leistung</td>
                    <td style="padding:6px 0;color:#0f172a;">${service || '-'}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;width:140px;font-weight:600;color:#0f172a;">Wunschtermin</td>
                    <td style="padding:6px 0;color:#0f172a;">${date || '-'}</td>
                  </tr>
                </table>

                <div style="margin-top:18px;padding-top:12px;border-top:1px solid #e2e8f0;">
                  <div style="font-weight:600;color:#0f172a;margin-bottom:6px;">Nachricht</div>
                  <div style="white-space:pre-line;color:#0f172a;font-size:14px;">${(message || '').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#f8fafc;padding:12px 24px;font-size:11px;color:#94a3b8;">
                Diese E-Mail wurde automatisch vom Kontaktformular der KIRAL&nbsp;BAU Website gesendet. Bitte direkt per E-Mail antworten oder telefonisch zurückrufen.
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Kontaktformular Fehler:', error);
    return res.status(500).json({ ok: false, error: 'EMAIL_SEND_FAILED' });
  }
}