exports.run = (client, msg, newmsg) => {
  const { schemaManager } = client.settingGateway;
  if(msg.content === newmsg.content) return;
  if (!schemaManager.schema["rawLogs"]) {
    schemaManager.add("rawLogs", {type: "String", array: true, default: []}, true);
    schemaManager.add("rawLogChannel", {type: "String"});
  }

  if(!msg || !msg.id || !msg.content || !msg.guild) return;
  const conf = msg.guild.settings;
  if(!conf.rawLogs.includes("all") && !conf.rawLogs.includes("messageUpdate") || !conf.rawLogChannel) return;
  const channel = msg.guild.channels.get(conf.rawLogChannel);
  if(!channel) return;
  channel.send(`📝 ${msg.author.tag} (${msg.author.id}) : Message Edited in ${msg.channel.name}:\n**B**: ${msg.cleanContent}\n**N**: ${newmsg.cleanContent}`);
};
