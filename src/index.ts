import { Message } from "discord.js";
import { validateEnv} from "./utils/validateEnv";
import { onMessage } from "./events/onMessage";

const { Client, Intents } = require('discord.js');

(async () => {
    if (!validateEnv()) return;

    const BOT = new Client();

    BOT.on("ready", () => console.log("Connected to Discord"));
    BOT.on("message", async (message: Message) => await onMessage(message));

    await BOT.login(process.env.BOT_TOKEN);

})();