const { SlashCommandBuilder } = require ("discord.js")
module.exports = {
    data: new SlashCommandBuilder()
    .setName("review")
    .setDescription("Leave a review for your recent order.")
    .addStringOption(option => option
        .setName("rating")
        .setDescription("Select a rating for your order experience.")
        .addChoices(
            {name: "⭐", value: "⭐"},
            {name: "⭐⭐", value: "⭐⭐"},
            {name: "⭐⭐⭐", value: "⭐⭐⭐"},
            {name: "⭐⭐⭐⭐", value: "⭐⭐⭐⭐"},
            {name: "⭐⭐⭐⭐⭐", value: "⭐⭐⭐⭐⭐"}
        )
        .setRequired(true)

    )

    .addStringOption(option => option
        .setName("feedback")
        .setDescription("Input feedback for Mistle.")
        .setRequired(true)
    ),

    async execute (interaction) {
        const hasRole = interaction.member.roles.cache.has("1503255440341864489");
        const isAdmin = interaction.member.permissions.has("Administrator");

        if (!hasRole && !isAdmin) {
            return interaction.reply({content: "<:xMark:1503593360995254383> You must be a **client** to use this command.", flags: 64})
        }

        const rating = interaction.options.getString("rating");
        const feedback = interaction.options.getString("feedback");

        const channel = interaction.guild.channels.cache.get("1503425388955566310");
        await channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 12,
          "items": [
            {
              "media": {
                "url": "https://media.discordapp.net/attachments/1503464946401542196/1503605816219930714/image.png?ex=6a03f58a&is=6a02a40a&hm=3f9bd21bdefd2d3f421f11d099035a1be4d6f502099c90059c7c3bdc0aff20cf&=&format=webp&quality=lossless&width=550&height=192"
              }
            }
          ]
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": `${interaction.user} is the client of this order.\n\n**Designer:** <@1499915565538611401>\n**Rating:** ${rating}\n**Feedback:** ${feedback}\n\nThank you for ordering with **Mistle's Commissions**, & we hope you enjoyed your order experience.`
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
                "url": "https://media.discordapp.net/attachments/1503464946401542196/1503465528725999626/image.png?ex=6a0372e3&is=6a022163&hm=ee33865ea69c77fb8dc317ce76b2c328afb44487e638715ceadb0c0be9e55ed6&=&format=webp&quality=lossless"
              }
            }
          ]
        }
      ]
    }
  ]
});

    await interaction.reply({content: "<:check:1503593424299753555> Successfully sent review in <#1503425388955566310>."})
    }
}