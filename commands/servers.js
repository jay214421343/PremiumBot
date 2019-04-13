const { version } = require("discord.js");
exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send(`= Servers/users =
• Users      :: ${client.users.size.toLocaleString()}
• Servers    :: ${client.guilds.names.toLocaleString()}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "servers",
  category: "Miscelaneous",
  description: "Gives some useful server statistics",
  usage: "servers"
};
