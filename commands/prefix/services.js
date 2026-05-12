module.exports = {
    name: "services",

    async execute (message) {
        const hasAdmin = message.member.permissions.has("Administrator");
        if (!hasAdmin) {
            return message.reply("<:xMark:1503593360995254383> You do not have permission to run this command.")

        }

        const channel = message.guild.channels.cache.get("1503425345783726192");
        await message.delete();
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
                "url": "https://media.discordapp.net/attachments/1503464946401542196/1503470389110509729/image.png?ex=6a037769&is=6a0225e9&hm=b2ec90230bed18e8571b610b61bcf66db843221480fa2133e501fa4029d00df5&=&format=webp&quality=lossless&width=550&height=185"
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
          "content": "If you're looking to order with Mistle, it is essential you review our Order Terms below to avoid moderation or your order being closed. By opening an order, you agree to our Order Terms listed below. To order, use the button below & ensure to enter all information with as much detail and accuracy as possible."
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 1,
          "components": [
            {
              "style": 1,
              "type": 2,
              "label": "Order",
              "custom_id": "order",
              "flow": {
                "actions": []
              }
            },
            {
              "style": 2,
              "type": 2,
              "label": "Order Terms",
              "custom_id": "order_terms",
              "flow": {
                "actions": []
              }
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
                "url": "https://media.discordapp.net/attachments/1503464946401542196/1503465528725999626/image.png?ex=6a0372e3&is=6a022163&hm=ee33865ea69c77fb8dc317ce76b2c328afb44487e638715ceadb0c0be9e55ed6&=&format=webp&quality=lossless"
              }
            }
          ]
        }
      ]
    }
  ]
});
    }
}