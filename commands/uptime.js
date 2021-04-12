const { MessageEmbed }= require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n⌚ ${hours.toFixed()} horas\n⏱ ${minutes.toFixed()} minutos\n⏳ ${seconds.toFixed()} segundos`;

  const embed = new MessageEmbed()
    .setTitle(`Tempo de atividade!`)
    .setThumbnail("https://imgur.com/WZMylbw.gif")
    .setColor("RANDOM")
    .setDescription(`**Estou online há:**\n${uptime}`);

  message.channel.send(embed);
  
};