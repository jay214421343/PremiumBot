const Discord = require("discord.js");
const YTDL = require("ytdl-core");
const ffmpeg = require("ffmpeg");

var servers = {};

function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
    connection.disconnect();
    })
}


exports.run = async (client, message, args) => {
	if (!args[0]) {
      message.channel.send("⚠ **Please provide a link!**");
      return;
    }
    if (!args[0].startsWith("https://www.youtube.com/watch?v=")) return message.channel.send("⚠ **Please enter a valid youtube link!**");

    if (!message.member.voiceChannel) {
      message.channel.send("⚠ **You must be in a voice channel!**");
      return;
    }
    let info = await YTDL.getInfo(args[0]);

    if (!servers[message.guild.id]) servers[message.guild.id] = {
      queue: []
    };

    var server = servers[message.guild.id];

    server.queue.push(args[0]);

    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
      play(connection, message);
      message.channel.send(`▶ **Now playing:** ${info.title}`);
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'play',
  description: 'MOISUC',
  usage: 'play (url)'
};
