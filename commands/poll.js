const Discord = require('discord.js');
const weather = require('weather-js')
exports.run = (client, message, args) => {
  let desc = args.slice(0).join(' ');
   if (desc.length < 1) return message.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: "You must specify what the poll is for!" } }).catch(console.error);
   message.delete();
  const embed = new Discord.RichEmbed()
    .setColor(0xFFFFFF)
    .setFooter(`Started by: ${message.author.tag}`)
    .setTitle("Poll")
    .setDescription(desc)
  message.channel.send(embed).then(sentEmbed => {
      sentEmbed.react("👍")
      sentEmbed.react("🤷")
      sentEmbed.react("👎")
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'poll',
  category: 'Moderation',
  description: 'Poll',
  usage: 'poll <desc>'
};
