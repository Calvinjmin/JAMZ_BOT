const kick = require("../commands/kick.js")
const time = require("../commands/time.js")
const echo = require("../commands/echo.js")
const joinVoice = require("../commands/joinVoice.js")
const leaveVoice = require("../commands/leaveVoice.js")

const prefix = "!";

module.exports = (client, message) => {
  if (message.content.startsWith(prefix + "kick")) {
    return kick(message)
  }

  if ( message.content.startsWith(prefix +"join" ) ){
    joinVoice(message);
  }

  if ( message.content.startsWith(prefix +"leave" ) ){
    leaveVoice(message);
  }

  if(message.content.startsWith(prefix + "echo")){
    return echo(message)
  }

  if(message.content.startsWith(prefix + "time")){
    return time(message)
  }

}