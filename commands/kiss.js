const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  var list = [
    "https://imgur.com/iclUiUN.gif",
    "https://imgur.com/lYQt9rx.gif",
    "https://imgur.com/w1TU5mR.gif",
    "https://imgur.com/MzAjNdv.gif",
    "https://imgur.com/eKcWCgS.gif",
    "https://imgur.com/Uow8no2.gif",
    "https://imgur.com/JbdWsLa.gif",
    "https://imgur.com/MGdlYsj.gif",
    "https://imgur.com/bT23r6O.gif",
    "https://imgur.com/o1X15Ci.gif",
    "https://imgur.com/8E8jBLr.gif",
    "https://imgur.com/NsxxrvJ.gif",
    "https://imgur.com/rBlYoxN.gif",
    "https://imgur.com/7ZB4uaL.gif"
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply(
      "lembre-se de mencionar um usuário válido para beijar!"
    );
  }
  let avatar = message.author.displayAvatarURL({ format: "png" });
  const embed = new MessageEmbed()
    .setTitle("Ain q dlç :heart:")
    .setColor("RANDOM")
    .setDescription(`${message.author.username} **beijou** ${user.username}! <:pandalove:804075902363238411>`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter("Kissu kissu kissu")
    .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
};

