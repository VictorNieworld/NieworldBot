const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){


        const victornieworld = new Discord.MessageEmbed()
        .setTitle("A história do meu criador...")
        .setThumbnail('https://imgur.com/RgjCDHh.jpg')
        .setImage('https://imgur.com/aFtAsGK.gif')
        .setColor("RANDOM")
        .addField('Olá, meu nome real é Victor Gabriel.\nTenho alguns anos ai, faço niver dia 13/05.','Sou Streamer, Youtuber e programador (apesar de estar parado a algum tempo XD), jogo tudo desde minecraft até Warzone! A minha meta na Twitch, no Discord e no Youtube é construir a melhor comunidade de todas!\nJuntem-se a nós e lembrem-se, Better days will come! (Dias melhores virão!)')
        .addField('Para quem quiser falar diretamente comigo:','<a:dndc:826521722374586398> <@770250380755730472>')
        .addField(':link: **Meus sócias:**', '** <:Twitch:823258870117826560> [Twitch](https://twitch.tv/victornieworld)\n<:youtube:823258501710348308> [Youtube](https://www.youtube.com/channel/UCfOgokEWyuOsVae4rYPtJEA)\n <:instagram:823259229095854141> [Instagram](https://www.instagram.com/VictorNieworld)\n <:facebook:824384877478150155> [Facebook](https://www.facebook.com/profile/VictorNieworld)\n <:twitter:824384877406978079> [Twitter](https://twitter.com/VictorNieworld)\n<:omlet:830878159980199936> [Omlet](http://omlet.gg/profile/victor_nieworld)\n<:Patreon:829068115051937852> [Patreon](https://www.patreon.com/victornieworld)\n <:Paypal:826520556555337779> Paypal (Em breve)**', true)
        .addField("**Suporte:**","**Caso você tenha algum dúvida sobre o <@793282098936938527>, acesse o chat de suporte: [Clique Aqui](https://discord.gg/pCXYn4DXMD)**")
        .addField('Bot Oficial da Casa do Victor 🏠', `__**[Clique Aqui](https://discord.gg/v776WbA9wd)**__`)
        .setTimestamp()

        const azidea = new Discord.MessageEmbed()
        .setThumbnail('https://imgur.com/RgjCDHh.jpg')
        .setImage('https://imgur.com/aFtAsGK.gif')
        .setColor("RANDOM")
        .addField('Pra quem chegou até aqui, você pode ganhar um prêmio se seguir as instruções a baixo.','Como faz pra resgatar o pêmio:\nPara resgatar o prêmio você deve entrar no servidor do discord [Casa do Victor 🏠](https://discord.gg/v776WbA9wd), vá no chat <#817741305358712842>, abra um ticket e mande esse codiguin "nieworld1305" no seu ticket. Assim você vai estar ganhando o nosso cargo de vip e 5k sonhos da <@297153970613387264>')
        .setTimestamp()

        const pages = [
                victornieworld,
                azidea

        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '180000';

        pagination(message, pages, emojiList, timeout)
    }
}