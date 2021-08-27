const Discord = require('discord.js');
import { Message } from "discord.js";
import { validateEnv} from "./utils/validateEnv";
import { onMessage } from "./events/onMessage";

(async () => {
    if (!validateEnv()) return;

    const BOT = new Discord.Client();

    BOT.on("ready", () => console.log("Connected to Discord"));
    BOT.on("message", async (message: Message) => await onMessage(message));

    await BOT.login(process.env.BOT_TOKEN);

})();