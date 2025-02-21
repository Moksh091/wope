import { SendVerificationRequestParams } from "next-auth/providers/email";

    export async function sendVerificationRequest(
    params: SendVerificationRequestParams
    ) {
    const { identifier, url, provider } = params;
    const { host } = new URL(url);

    try {
        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            personalizations: [
            {
                to: [{ email: identifier }],
            },
            ],
            from: { email: provider.from! },
            subject: `Sign in to ${host}`,
            content: [
            {
                type: "text/html",
                value: `
                        <html>
                        <body style="padding: 20px; font-family: Arial, sans-serif;">
                    <h2>Sign in to ${host}</h2>
                    <p>Click the button below to sign in to your account:</p>
                    <a 
                        href="${url}" 
                        style="
                        display: inline-block;
                        padding: 12px 24px;
                        background-color: #4F46E5;
                        color: white;
                        text-decoration: none;
                        border-radius: 6px;
                        margin: 16px 0;
                        "
                    >
                        Sign in
                    </a>
                    <p>If you didn't request this email, you can safely ignore it.</p>
                    <hr style="border: 1px solid #eaeaea; margin: 20px 0;" />
                    <p style="color: #666; font-size: 14px;">
                        This link will expire in 24 hours.
                    </p>
                    </body>
                </html>
                `,
            },
            ],
        }),
        });
        if(!response.ok) {
            const error = await response.json();
            throw new Error(JSON.stringify(error))
        }
    } catch (error) {
        console.error('SEND_VERIFICATION_EMAIL_ERROR', error)
        throw new Error('SEND_VERIFICATION_EMAIL_ERROR')
    }
    }
