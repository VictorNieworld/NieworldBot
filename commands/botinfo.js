const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){


        const donates = new Discord.MessageEmbed()
        .setTitle("Quer me ajudar?")
        .setThumbnail('https://imgur.com/RgjCDHh.jpg')
        .setImage('https://imgur.com/aFtAsGK.gif')
        .setColor("RANDOM")
        .addField("Me ajude fazendo uma doação.", "**Atualmente estou hospedado em uma VPS que custa 30 reais por mês. Ajude doando qualquer valor, com isso você pode receber vantagens no servidor, por exemplo, uma categoria exclusiva para doadores e até o cargo exclusivo <@&817741092732403733>.\n\n Como doar:\nVocê pode doar pela Twitch, pelo PayPal ou doando pela Patreon.\nApós realizar a doação, entre em contato com meu criador: <@770250380755730472>**")
        .addField(':link: **LINKS:**', '** <:Twitch:823258870117826560> [Twitch](https://twitch.tv/victornieworld)\n<:youtube:823258501710348308> [Youtube](https://www.youtube.com/channel/UCfOgokEWyuOsVae4rYPtJEA)\n <:instagram:823259229095854141> [Instagram](https://www.instagram.com/VictorNieworld)\n <:facebook:824384877478150155> [Facebook](https://www.facebook.com/profile/VictorNieworld)\n <:twitter:824384877406978079> [Twitter](https://twitter.com/VictorNieworld)\n<:omlet:830878159980199936> [Omlet](http://omlet.gg/profile/victor_nieworld)\n<:Patreon:829068115051937852> [Patreon](https://www.patreon.com/victornieworld)\n <:Paypal:826520556555337779> Paypal (Em breve)**', true)
        .addField("**Suporte:**","**Caso ainda tenha alguma dúvida em como doar, acesse o chat de suporte: [Clique Aqui](https://discord.gg/pCXYn4DXMD)**")
        .addField('Bot Oficial da Casa do Victor 🏠', `__**[Clique Aqui](https://discord.gg/v776WbA9wd)**__`)
        .setTimestamp()

        const bothistory = new Discord.MessageEmbed()
        .setTitle('Minha história...')
        .setColor("RANDOM")
        .addField('Como fui criado:', 'Fui criado no dia 28 de dezembro de 2020, às 21:59.\nTudo não se passava de apenas uma brincadeira do meu criador, ele me criou com a intenção de fazer algumas brincadeiras com os amigos dele... até que um dia ele começou a me levar a sério. Nesse dia ele passou 9 horas me programando e pensando em coisas legais para adicionar, mas após trés dias me programando, ele desistiu de mim... me deixou sozinho, sem ninguém... (brincadeiras à parte...). Após ele ter desistido de mim, ele descansou e passaram-se dois dias para ele voltar a me programar.\nApós 1 mês, ele decidiu fazer uma atualização em mim, ou seja, virei o "NieworldV2", com novos comandos, com menos bugs. Mas após uma semana, a host que ele utilizava foi descontinuada, assim fazendo-o utilizar uma host melhor, porém, ela custa 30 reais. Com tudo isso acontecendo ele não sabia muito o que fazer comigo, além de me desativar...')
        .addField('Como me tornei o "NieworldBot":','Com o incentivo de alguns amigos, ele decidiu fazer uma nova atualização em mim, e agora me tornei o "NieworldBot", ele atualizou todos os meus comandos, adicionou novos comandos, mudou a minha foto de perfil, entre outras coisas. Porém ele decidiu me deixar público, ou seja, todos vocês podem me adicionar, mas se eu não receber doações... serei desativado, o que seria bem triste para mim.\n\n***Então por favor, ajudem a me deixar online.***')
        .setTimestamp()

        const pages = [
                donates,
                bothistory

        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '500000';

        pagination(message, pages, emojiList, timeout)
    }
}