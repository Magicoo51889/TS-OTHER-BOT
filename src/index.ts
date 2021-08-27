const Discord = require('discord.js');
import { Client, Message } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv} from "./utils/validateEnv";
import { onMessage} from "./events/onMessage";

(async () => {
    if (!validateEnv()) return;

    const BOT = new Discord.Client();

    BOT.on("ready", () => console.log("Connected to Discord"));
    BOT.on("message", async (message: Message) => await onMessage(message));

    await connectDatabase();
    await BOT.login(process.env.BOT_TOKEN);

})();