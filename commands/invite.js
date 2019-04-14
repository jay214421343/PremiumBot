  
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const inviteLink = `https://discordapp.com/api/oauth2/authorize?client_id=561834611156582420&permissions=2080898295&redirect_uri=https%3A%2F%2Fdiscord.gg%2FcqMkUuc&scope=bot`;
  message.channel.send(`To invite The Bot, click on the following link:\n<${inviteLink}>`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "Miscelaneous",
  description: "Shows the link to invite this bot.",
  usage: "invite"
};
