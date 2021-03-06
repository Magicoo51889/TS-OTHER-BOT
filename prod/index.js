"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateEnv_1 = require("./utils/validateEnv");
const onMessage_1 = require("./events/onMessage");
const { Client, Intents } = require('discord.js');
(() => __awaiter(void 0, void 0, void 0, function* () {
    if (!(0, validateEnv_1.validateEnv)())
        return;
    const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
    client.on("ready", () => {
        console.log("Connected to Discord");
        client.user.setActivity('Jack\'s BOT', { type: 'WATCHING' });
    });
    client.on("message", (message) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, onMessage_1.onMessage)(message); }));
    yield client.login(process.env.client_TOKEN);
    client.on('message', (recievedMessage) => {
        if (recievedMessage.author == client.user) {
            return;
        }
    });
}))();
