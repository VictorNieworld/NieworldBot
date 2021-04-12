const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const curiosidade = [
        'A cada minuto, cerca de 72 horas de conteúdo são enviadas ao site de vídeos Youtube',
        'Estima-se que, a cada ano, o monte Everest cresça 4 milímetros',
        'A maior palavra da língua portuguesa refere-se a uma doença causada pela respiração de cinzas vulcânicas: pneumoultramicroscopicossilicovulcanoconiótico.',
        'O Brasil é o país que possui a maior comunidade japonesa fora do Japão. Só em São Paulo, moram mais de 600 mil japoneses.',
        'O calendário da Etiópia é sete anos atrasado em relação aos demais países do ocidente',
        'A avenida mais larga do mundo, com 14 faixas diferentes, fica na Argentina',
        'Mais de 10% de toda a biodiversidade do mundo é encontrada no continente australiano',
        'A Rússia é o maior país do mundo, ocupando cerca de 10% de toda a terra do planeta',
        'Os ursos-polares são, praticamente, invisíveis pelas câmeras de calor em virtude da eficiente camada de gordura isolante que os protege do frio',
        'Existem algumas árvores vivas espalhadas pelo mundo que têm, pelo menos, 5000 anos de idade',
        'A língua de uma baleia-azul pode pesar até 3,6 toneladas, o equivalente ao peso de um elefante médio',
        'Os vertebrados mais longevos do mundo são os tubarões da Groenlândia, que podem viver cerca de 400 anos',
    ]
    const curiosidadefinal = curiosidade[Math.floor(Math.random() * curiosidade.length)];
    const embedcuriosidade = new Discord.MessageEmbed()
    .setTitle('<a:Thinking:805214804167622686> Curiosidades Aleatórias')
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**Curiosidade selecionada:**', curiosidadefinal)
    message.channel.send(embedcuriosidade)
}