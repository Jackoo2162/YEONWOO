const Discord = require('discord.js');
const bot = new Discord.Client();
const Cleverbot = require("cleverbot-node");
const clbot = new Cleverbot;



bot.on('message', message => {
  if (message.content === 'Hi') {
   // message.reply('pong');
    message.channel.sendMessage('annyeong');
  }
});

bot.on('message', message => {
  if (message.content === '') {
   // message.reply('pong');
    message.channel.sendMessage('');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"SINGING BBOOM BBOOM"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'SUCKED IN');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});


// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

bot.on('message', message=>{
  if (message.content.startsWith('Hey')){
      message.author.send('How are you today?');
  }
});

bot.on('message', message=>{
  if (message.content.startsWith('What is your name?')){
      message.author.send('YEONWOO');
  }
});

bot.on('message', message=>{
  if (message.content.startsWith('What group are you from?')){
      message.author.send('MOMOLAND');
  }
});




bot.on("message", message => {
  if (message.channel.type === "dm") {
    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
});

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.login('NDA5MTgxMDg0NTU5OTk4OTc2.DVa3Rw.WvoNArlhUmCuMUKa1Ng1cuagSrc');
