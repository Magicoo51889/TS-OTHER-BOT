import { Message } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv} from "./utils/validateEnv";
import { onMessage } from "./events/onMessage";


const { Client, Intents } = require('discord.js');

(async () => {
    if (!validateEnv()) return;

    const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

    client.on("ready", () => {
        console.log("Connected to Discord")
        client.user.setActivity('Jack\'s BOT', { type: 'WATCHING' })
    });

    client.on("message", async (message: Message) => await onMessage(message));
    await client.login(process.env.client_TOKEN);
    
    client.on('message', (recievedMessage: { author: string; }) => {
        if (recievedMessage.author == client.user) {
            return
        }
    })

    await connectDatabase();
})();
