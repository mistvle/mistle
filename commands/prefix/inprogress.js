module.exports = {
    name: "inprogress",

    async execute (message) {
        const isAdmin = message.member.permissions.has("Administrator");
        if (!isAdmin) {
            return message.reply("<:xMark:1503593360995254383> You do not have permission to run this command.")

        }
        await message.delete();
        await message.channel.send({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "# <:m_Heart:1504308082287575151> Order In-Progress"
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": " Thank you for ordering with **Mistle's Commissions**.  Your payment has been verified, and your order is currently in progress. If you have any inquiries, ensure to ask below. Updates on your orders will be sent here."
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
              "label": "In-Progress",
              "disabled": true,
              "flow": {
                "actions": []
              },
              "custom_id": "p_302287897720000513"
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
                "url": "https://media.discordapp.net/attachments/1503464946401542196/1503465528725999626/image.png?ex=6a076763&is=6a0615e3&hm=33f7a0bf2186fe077b850ac2ba247decb076c2d84820805a283d7bff1762fe9c&=&format=webp&quality=lossless"
              }
            }
          ]
        }
      ]
    }
  ]
})
    }
}