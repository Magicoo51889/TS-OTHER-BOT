import { Message } from "discord.js";

export const onMessage = async (message: Message) => {
    console.log(message.content)

    const prefix = "[BOT]"
    if (!message.content.startsWith(prefix))

    if (message.author.bot) {
        return;
    }
};
