import { Message } from "discord.js";
import { validateEnv} from "./utils/validateEnv";
import { onMessage } from "./events/onMessage";

const { Client, Intents, Discord } = require('discord.js');

(async () => {
    if (!validateEnv()) return;

    const BOT = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });

    BOT.on("ready", () => console.log("Connected to Discord"));
    BOT.on("message", async (message: Message) => await onMessage(message));
    BOT.user.setActivity('Jack\'s BOT', { type: 'WATCHING' });

    await BOT.login(process.env.BOT_TOKEN);

})();