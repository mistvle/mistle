const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const noblox = require("noblox.js");

// 🔹 YOUR GAMEPASS ID (NOT product id)
const GAMEPASS_ID = "1840538575";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("payment")
        .setDescription("Send a gamepass with the payment amount.")
        .addIntegerOption(option =>
            option
                .setName("amount")
                .setDescription("Input the amount of the gamepass.")
                .setRequired(true)
        ),

    async execute(interaction) {
        const isAdmin = interaction.member.permissions.has("Administrator");

        if (!isAdmin) {
            return interaction.reply({
                content: "<:xMark:1503593360995254383> You do not have permission to run this command.",
                flags: 64
            });
        }

        const amount = interaction.options.getInteger("amount");

        try {
            // 🔥 LOGIN TO ROBLOX
            await noblox.setCookie(process.env.ROBLOX_COOKIE);

            // 🔥 CHANGE GAMEPASS PRICE
            await noblox.configureGamePass(
                parseInt(GAMEPASS_ID),
                "", // keep name
                "", // keep description
                amount
            );

        } catch (err) {
            console.error(err);

            return interaction.reply({
                content: "<:xMark:1503593360995254383> Failed to update gamepass price.",
                flags: 64
            });
        }

        // 🔹 SEND EMBED + BUTTON

        await interaction.reply({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "# Payment Update"
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": `Purchase the gamepass linked below to continue with your order. Your gamepass has been sent to **${amount} ROBUX**.`
        },
        {
          "type": 1,
          "components": [
            {
              "type": 2,
              "style": 5,
              "label": "Purchase",
              "url": `https://www.roblox.com/game-pass/${GAMEPASS_ID}`,
            }
          ]
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1503464946401542196/1503465528725999626/image.png?ex=6a0a0a63&is=6a08b8e3&hm=51fe860124e734d6d1a93b722a001f20dbafdd446acc9409e042aa21d30ea7c7&=&format=webp&quality=lossless"
              }
            }
          ]
        }
      ]
    }
  ]
});
    }
};