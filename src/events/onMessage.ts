import { Message } from "discord.js";
import { client } from "./src/index";

export const onMessage = async (message: Message) => {
    console.log(message.content)

};

client.on('message', (recievedMessage) => {
    if (recievedMessage.author == client.user)
})