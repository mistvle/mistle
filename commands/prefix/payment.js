module.exports = {
    name: "payment",

    async execute (message) {
        await message.reply({
  "flags": 32768,
  "components": [
    {
      "type": 17,
      "components": [
        {
          "type": 10,
          "content": "# <:m_Heart:1504308082287575151> Payment"
        },
        {
          "type": 14,
          "spacing": 2
        },
        {
          "type": 10,
          "content": "To pay Mistle for your order, you must pay **100%** upfront via **BuymeaCoffee**. You can access our site [here](https://buymeacoffee.com/mistvle)."
        },
        {
          "type": 14,
          "divider": false
        },
        {
          "type": 1,
          "components": [
            {
              "type": 2,
              "style": 5,
              "label": "Link",
              "url": "https://buymeacoffee.com/mistvle",
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