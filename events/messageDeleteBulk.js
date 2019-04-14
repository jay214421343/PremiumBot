exports.run = async (client, msgs) => {
  const { schemaManager } = client.settingGateway;
  if (!schemaManager.schema["rawLogs"]) {
    schemaManager.add("rawLogs", {type: "String", array: true, default: []}, true);
    schemaManager.add("rawLogChannel", {type: "String"});
  }

  const msg = msgs.first();
  if(!msg || !msg.id || !msg.content || !msg.guild) return;
  const conf = msg.guild.settings;
  if(!conf.rawLogs.includes("all") && !conf.rawLogs.includes("messageUpdate") || !conf.rawLogChannel) return;
  const channel = msg.guild.channels.get(conf.rawLogChannel);
  if(!channel) return;
  const log = msgs.map(m=> `${m.createdAt} (${m.guild.id} / #${m.channel.id} / ${m.author.id}) ${m.author.tag} : ${m.cleanContent}`).join("\n");
  const hasteURL = await require("snekfetch")
    .post("http://how.evie-banned.me/documents")
    .send(log).catch(e => {throw new Error(`Error posting data: ${e}`)});
  const url = `http://how.evie-banned.me/${hasteURL.body.key}.txt`;
  channel.send(`🗑 ${msgs.size} messages removed in **${msg.channel.name}** : ${url}`);
};
