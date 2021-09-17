import { Message } from "discord.js";

export interface CommandInt {
    data: any;
    name: string 
    description: string
    run: (message: Message) => Promise<void>
};