const kick = require("../commands/kick.js")
const text = require("../commands/text.js")
const time = require("../commands/time.js")

module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }

  if(message.content.startsWith("!test")){
    return text(message)
  }

  if(message.content.startsWith("!time")){
    return time(message)
  }

}