const { Client } = require("discord.js"); 
const client = new Client(); 
const config = require("./config.json"); 
client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
    return;
  if (
    message.content.startsWith(`<@!${client.user.id}>`) ||
    message.content.startsWith(`<@${client.user.id}>`)
  )
    return;

  const args = message.content
    .trim()
    .slice(config.prefix.length)
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    const commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("Erro:" + err);
  }
});

client.login(config.token);

client.on("ready", () => {
  let activities = [
      `Meu criador: VictorNieworld#5780`,
      `Utilize n!ajuda/help, para obter ajuda!!`,
      `twitch.tv/victornieworld`,
      `📸 Instagram  @VictorNieworld`,
      `Bot Oficial da Casa do Victor 🏠`,
      `🐦 Twitter @VictorNieworld`,
      `Utilize n!botinfo, para saber a minha história!!`
    ],
    i = 0;
  setInterval(
    () =>
      client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }),
    120 * 60
  );
  client.user.setStatus("online").catch(console.error);
  console.log("O pai ta online!");
});