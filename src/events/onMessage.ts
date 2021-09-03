import { Message } from "discord.js";

export const onMessage = async (message: Message) => {
    console.log(message.content)

    console.log('Hello World!')
};

