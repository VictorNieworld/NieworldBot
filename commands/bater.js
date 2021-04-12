const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  var list = [
    "https://imgur.com/VW0cOyL.gif",
    "https://i.imgur.com/GPQJEx5.gif",
    "https://i.imgur.com/mdZR2D2.gif",
    "https://i.imgur.com/Li9mx3A.gif",
    "https://i.imgur.com/kVI9SHf.gif",
    "https://i.imgur.com/RFWNaoF.gif",
    "https://i.imgur.com/CwbYjBX.gif",
    "https://i.imgur.com/mIg8erJ.gif",
    "https://i.imgur.com/oOCq3Bt.gif",
    "https://i.imgur.com/4MQkDKm.gif",
    "https://i.imgur.com/w4iZeSW.gif"
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) {
    return message.reply(
      "️️️️️:man_facepalming: ️lembre-se de mencionar um usuário válido!"
    );
  }
  let avatar = message.author.displayAvatarURL({ format: "png" });
  const embed = new MessageEmbed()
    .setTitle("***Nuuuussa, só observo...***")
    .setColor("RANDOM")
    .setDescription(`${message.author.username} **bateu no(a)** ${user.username}!`)
    .setImage(rand)
    .setTimestamp()
    .setThumbnail(avatar)
    .setFooter("Krai burracha, pra que agredir?")
    .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
module.exports.tapa = {
  name: "tapa",
  description: "Use para ver todos os comandos do Nieworld",
  usage: "n!tapa",
  accessableby: "Todos",
  aliases: ["slap", "bater"],
  category: "Diversão"
}