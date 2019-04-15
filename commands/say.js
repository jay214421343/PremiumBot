exports.run = (client, message, args) => {
 message.delete()
 message.channel.send(args.join(' '))
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
 permLevel 'User'
};

exports.help = {
  name: 'say',
  category: 'fun',
  description: 'say',
  usage: 'say'
};
