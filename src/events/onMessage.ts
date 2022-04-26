import { Message } from "discord.js";

export const onMessage = async (message: Message) => {
    console.log(message.content)

    if (!message.content.startsWith("*"))

    if (message.author.bot) {
        return;
    }
};
