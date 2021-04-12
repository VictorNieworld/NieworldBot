const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let membro = message.mentions.users.first() || message.author

  let avatar = membro.displayAvatarURL({dynamic: true, size: 4096})

  let embed = new MessageEmbed() 
    .setTitle(`Avatar de ${membro.username}`)
   .setDescription(`[Baixe aqui](${avatar})`)
   .setColor("RANDOM")
   .setImage(avatar)
   .setFooter(message.guild.name)
   .setTimestamp() 

 await message.channel.send(embed); 

};