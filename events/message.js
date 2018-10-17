// The MESSAGE event runs anytime a message is received
// Note that due to the binding of client to every event, every event
// goes `client, other, args` when this function is run.
function matchMention(text) {
   var mentionTag1 = '<@502233583864250368> '
   var mentionTag2 = '<@!502233583864250368> '
   if (text.indexOf(mentionTag1) == 0) {
     return text.slice(mentionTag1.length)
   }
   if (text.indexOf(mentionTag2) == 0) {
       return text.slice(mentionTag2.length)
   }
   return;
}

function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


module.exports = (client, message) => {
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").


  let match =  matchMention(message.content)

  if (match || message.channel.type == 'dm') {
    message.channel.startTyping()
    client.cleverbot.ask(match, function(err, response) {
       if (message.channel.type == 'dm') {
         message.author.send(response)
       } else {
         message.channel.send('<@!' + message.author.id + '> ' + response)
       }
       message.channel.stopTyping()
    })
 }

};
