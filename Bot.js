onst Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "411591887384739841"; // ايدي السررفر
var channel = "411591887384739845";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam-Spam **')
    },305);
})


client.login(process.env.BOT_TOKEN);
