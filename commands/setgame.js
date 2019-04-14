const Discord = require('discord.js');
exports.run = (client, msg, args) => {
	    if (msg.author.id !== "500772634154237952")then(msg.channel.send({embed: { color: 0xFF0000, title: "» Error!", description: `You do not have permission to run this!` } }));
var game = args.join(" ").trim();
  if(!game || game.length < 1) game = null;
  client.user.setPresence({ game: { name: game, type: 0 } });
	msg.channel.send({embed: { color: 0xFFFFFF, title: "Game changed!", description: "The game has been changed!"} });


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'setgame',
  description: 'setgame',
  usage: 'setgame'
};
