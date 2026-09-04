const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

export const NOTIFY_TO = "andersonmeralapo@gmail.com";

const b64 = (s: string) =>
  btoa(Array.from(new TextEncoder().encode(s), (b) => String.fromCharCode(b)).join(""));

const header = (v: string) => (/^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`);

function createRawEmail(to: string, subject: string, body: string): string {
  const email = [
    `To: ${to}`,
    `Subject: ${header(subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    body,
  ].join("\r\n");
  return b64(email).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/**
 * Sends a notification email through the owner's connected Gmail account.
 * Never throws: a failed notification must not break the user's submission.
 */
export async function sendNotification(subject: string, body: string): Promise<boolean> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];

  if (!lovableKey || !gmailKey) {
    console.error("[notify] missing LOVABLE_API_KEY or GOOGLE_MAIL_API_KEY");
    return false;
  }

  try {
    const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gmailKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: createRawEmail(NOTIFY_TO, subject, body) }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[notify] gateway request failed [${response.status}]: ${errorBody}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error("[notify] unexpected error", err);
    return false;
  }
}
