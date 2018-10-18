module.exports = async client => {
  // Why await here? Because the ready event isn't actually ready, sometimes
  // guild information will come in *after* ready. 1s is plenty, generally,
  // for all of them to be loaded.
  var ordinal = require('ordinal-js')
  await client.wait(10000);
  client.questions = [
    "What is today?",
    "Stop that!",
    "*tickles.*",
    "I have a joke. Knock knock!",
    "My name is Adria.",
    "What is today?",
    "Urusai baka!!",
    "Can you speak German?",
    "Hola amigo!",
    "*stabs.*",
    "I like pizza.",
    "What is your favorite food?",
    "We are sisters.",
    "Cleverbot, you are failing.",
    "Heil!!",
    "*laughs.*",
    "Go away!"
    
  ]
  
  function random(array) {
   return array[Math.floor(Math.random() * array.length)] || "I like pizza. What is your favorite food?"
  }
  let talkingChannel = client.channels.get('502148860945235978')
  talkingChannel.send("<@411683313926012928> " + random(client.questions))
  //client.startChannel = client.channels.get('491777217920106508')
  client.user.setActivity("Vanessa-sama <3", {type: "LISTENING"})
  
  // Both `wait` and `client.log` are in `./modules/functions`.
  client.logger.log(`[READY] ${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");
  // client.user.setActivity(`in the ${ordinal.toOrdinal(numb)} timeline. Use ${process.env.prefix}help. ` + client.guilds.size + " guilds." , "Hi.", "https://www.roblox.com/My/Groups.aspx?gid=3643510", "PLAYING")
  // We check for any guilds added while the bot was offline, if any were, they get a default configuration.
  // client.guilds.filter(g => !client.redisCient.get(g.id)).forEach(g => client.redisClient.set(g.id, client.config.defaultSettings));


};
