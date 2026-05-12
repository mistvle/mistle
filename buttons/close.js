module.exports = {
  customId: "close",

  async execute(interaction) {

    const isAdmin = interaction.member.permissions.has("Administrator");
    const hasRole = interaction.member.roles.cache.has("1503107376105001060");

    if (!isAdmin && !hasRole) {
      return interaction.reply({
        content: "<:xMark:1497479677755785379> You do not have permission to use this button.",
        flags: 64
      });
    }

    if (!interaction.channel.topic || !/^\d+$/.test(interaction.channel.topic)) {
      return interaction.reply({
        content: "<:xMark:1497479677755785379> You can only close a ticket.",
        flags: 64
      });
    }

    try {
      const user = await interaction.client.users
        .fetch(interaction.channel.topic)
        .catch(() => null);

      if (user) {
        await user.send({
          "flags": 32768,
          "components": [
            {
              "type": 17,
              "components": [
                { "type": 10, "content": "# Ticket Closed" },
                {
                  "type": 10,
                  "content": "Your ticket in **Mistle's Commissions** has been closed. If you need further assistance, do not hesitate to contact us again. We hope you enjoyed your experience with our team."
                },
                { "type": 14, "spacing": 2 },
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
        }).catch(() => {});
      }

      await interaction.reply({
        "flags": 32832,
        "components": [
          {
            "type": 17,
            "components": [
              {
                "type": 10,
                "content": "<a:loading:1503597542103846942> Closing ticket..."
              },
              { "type": 14, "spacing": 2 },
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

      setTimeout(async () => {
        await interaction.channel.delete().catch(() => {});
      }, 3000);

    } catch (err) {
      console.error(err);

      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "<:rose_xMark:1486977010143199382> An error occurred.",
          flags: 64
        }).catch(() => {});
      } else {
        await interaction.reply({
          content: "<:xMark:1503593360995254383> An error occurred.",
          flags: 64
        }).catch(() => {});
      }
    }
  }
};