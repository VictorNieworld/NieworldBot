const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  var list = [
    "https://imgur.com/IAxUnda.gif",
    "https://imgur.com/r9aU2xv.gif",
    "https://imgur.com/wOmoeF8.gif",
    "https://imgur.com/nrdYNtL.gif",
    "https://imgur.com/BPLqSJC.gif",
    "https://imgur.com/82xVqUg.gif",
    "https://imgur.com/UMm95sV.gif",
    "https://imgur.com/xJlQaNK.gif",
    "https://imgur.com/Qq135hv.gif",
    "https://imgur.com/RwofEWJ.gif",
    "https://imgur.com/iHYC2Ai.gif",
    "https://imgur.com/YVJwkHh.gif",
    "https://imgur.com/hDsJgXc.gif",
    "https://imgur.com/8xCXVNJ.gif",
    "https://imgur.com/IJluw9f.gif",
    "https://imgur.com/YPXryId.gif",
    "https://imgur.com/A4CCG7q.gif",
    "https://imgur.com/C6ySwxb.gif"
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply(
      "lembre-se de mencionar um usuário válido para abraçar!"
    );
  }
  let avatar = message.author.displayAvatarURL({ format: "png" });
  const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${message.author.username} **abraçou** ${user.username}! <:kannabear:804075901586636830>`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter("Hōyō hōyō hōyō")
    .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
};
