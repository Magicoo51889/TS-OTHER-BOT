import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import { IntentOptions } from "./config/IntentOptions";
import { Message } from "discord.js";
import { onInteraction } from "./events/onInteraction";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv} from "./utils/validateEnv";
import { onMessage } from "./events/onMessage";


const { Client } = require('discord.js');

(async () => {
    if (!validateEnv()) return;

    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1.0,
        integrations: [
          new RewriteFrames({
            root: global.__dirname,
          }),
        ],
      });

    const client = new Client({ IntentOptions });

    client.on("ready", () => {
        console.log("Connected to Discord")
        client.on("message", async (message: Message) => await onMessage(message));
        client.user.setActivity('Jack\'s BOT', { type: 'WATCHING' })
    });

    await client.login(process.env.client_TOKEN);
    
    client.on('message', (recievedMessage: { author: string; }) => {
        if (recievedMessage.author == client.user) {
            return
        }
    })

    client.on(
        "interactionCreate",
        async (interaction: any) => await onInteraction(interaction)
      );

    await connectDatabase();
})();
