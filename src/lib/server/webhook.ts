import { env } from "$env/dynamic/private";

export async function sendWebhookMessage(author: string, message: string, email?: string) {
    const response = await fetch(env.DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: "New message",
                    author: {
                        name: author,
                    },
                    description: `**Content:**\n${message}${email ? `\n\n**Email:**\n${email}` : ""}`,
                    color: 10378169
                }
            ]
        }),
    });
    if (!response.ok) {
        throw new Error(`Failed to send webhook message: ${response.statusText}`);
    }
    return true;
}