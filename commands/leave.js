const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const ffmpeg = require("ffmpeg");


exports.run = async (client, message, args) => {
  if(!message.guild.me.voiceChannel) return message.channel.send("*I'm not even connected in the first place!*")
  if(!message.member.voiceChannel) return message.channel.send("**You're not in the voice channel!**")
	if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("**You aren't in the same voice channel as me!**")
	message.guild.me.voiceChannel.leave();
	message.channel.send("**I have left the voice channel!**")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: 'leave',
  description: 'MOISUC',
  usage: 'leave'
};
