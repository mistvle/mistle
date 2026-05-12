module.exports = {
    name: "dashboard",

    async execute (message) {
        const isAdmin = message.member.permissions.has("Administrator");

        if (!isAdmin) {
            return message.reply("<:xMark:1503593360995254383> You do not have permission to run this command.")

        }

        const channel = message.guild.channels.cache.get("1503424758061203536");
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
                "url": "https://media.discordapp.net/attachments/1503464946401542196/1503467432075985050/image.png?ex=6a0374a8&is=6a022328&hm=a4df201a1888ff8fe89ca43f36a6d3cfb2de42639578f2ed54e2358c4b09cd79&=&format=webp&quality=lossless"
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
          "content": "Welcome to **Mistle's Commissions** — your go-to ER:LC bot developer. Mistle offers bots & packages for cheap prices, with top notch quality. Mistle completes orders fast and takes both **USD** & **ROBUX** for payment. Learn more by clicking the button below, or contact our team if you have questions."
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
              "label": "Help",
              "custom_id": "help",
              "flow": {
                "actions": []
              }
            },
            {
              "style": 2,
              "type": 2,
              "label": "Learn More",
              "custom_id": "learn_more",
              "flow": {
                "actions": []
              }
            },
            {
              "type": 2,
              "style": 5,
              "label": "Roblox Group",
              "url": "https://discohook.app/",
              "disabled": true
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
})
    }

}