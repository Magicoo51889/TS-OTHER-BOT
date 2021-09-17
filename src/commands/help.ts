import { CommandInt } from "../interfaces/CommandInt";
import { MessageEmbed } from "discord.js";
import { CommandList } from "./_CommandList";
import { errorHandler } from "../utils/errorHandler"

export const help: CommandInt = {
    name: "help",
    description: "Returns information on the bot's available commands.",
    run: async (message) => {
        try {
            await interaction.deferReply();
            const helpEmbed = new MessageEmbed();
            helpEmbed.setTitle("Available Commands!");
            helpEmbed.setDescription(
                "These are the available commands for this bot."
            );
            helpEmbed.addField(
                "Commands:",
                CommandList.map((el) => `\`!${el.name}\`: ${el.description}`).join("\n")
            );

            await interaction.editReply({ embeds: [helpEmbed] });
            return;
        } catch (err) {
            errorHandler("help command", err);
        }
    },
    data: undefined
};