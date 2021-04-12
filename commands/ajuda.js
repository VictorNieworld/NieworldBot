const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){


        const help = new Discord.MessageEmbed()
        .setTitle("Ajuda/Help")
        .setThumbnail('https://imgur.com/RgjCDHh.jpg')
        .setImage('https://imgur.com/ExHhwaY.gif')
        .setColor("RANDOM")
        .addField(`Você está vendo a ajuda no servidor ${message.guild.name}`, "**Meu criador: <@770250380755730472>**")
        .addField('Reaja no emoji ⏩, assim você verá meus comandos.','**Utilize n!botinfo, para saber um pouco da minha história!**')
        .addField(':link: **LINKS:**', '**<:Invite:830927564344000523> [Link de convite](https://discord.com/oauth2/authorize?client_id=793282098936938527&scope=bot&permissions=8)\n<:staff_tools:814967830088515594> [Discord Support](https://discord.gg/pCXYn4DXMD)**', true)
        .addField('Bot Oficial da Casa do Victor 🏠', `__**[Clique Aqui](https://discord.gg/v776WbA9wd)**__`)
        .setTimestamp()

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderação')
        .setImage('https://imgur.com/aFtAsGK.gif')
        .setColor('RANDOM')
        .addField('**`n!purge/clear/limpar`**', 'Limpa até 99 menssagens do chat.')
        .addField('**`n!lock/bloquear`**', 'Bloqueia o chat atual.')
        .addField('**`n!unlock/desbloquear`**', 'Desbloqueia o chat atual.')
        .addField('Bot Oficial da Casa do Victor 🏠', `__**[Clique Aqui](https://discord.gg/v776WbA9wd)**__`)
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Diversão')
        .setImage('https://imgur.com/aFtAsGK.gif')
        .setColor('RANDOM')
        .addField('**`n!hug/abraçar/abraço`**', '**`n!kiss/beijar/beijo\nn!slap/tapa/bater`**')
        .addField('**`n!perfect/perfeito`**', '**`n!curiosity/curiosidade`**')
        .addField('**`n!say/falar`**', '**`n!avatar`**')
        .addField('Bot Oficial da Casa do Victor 🏠', `__**[Clique Aqui](https://discord.gg/v776WbA9wd)**__`)
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utilidade')
        .setImage('https://imgur.com/aFtAsGK.gif')
        .setColor('RANDOM')
        .addField('**`n!help/ajuda`**','Mostrará´os meus comandos.')
        .addField('**`n!servericon`**', 'Mostrará o ícone do servidor atual.')
        .addField('**`n!botinfo`**', 'Aqui vocês poderão ver um pouco da minha história.')
        .addField('**`n!devinfo`**','Aqui vocês poderão saber pouco sobre o meu criador.')
        .addField('**`n!ping`**', 'Mostrará a latência da minha API.')
        .addField('**`n!uptime`**', 'Mostrará a quanto tempo estou online.')
        .addField('Bot Oficial da Casa do Victor 🏠', `__**[Clique Aqui](https://discord.gg/v776WbA9wd)**__`)
        .setTimestamp()

        const pages = [
                help,
                moderation,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '90000';

        pagination(message, pages, emojiList, timeout)
    }
}