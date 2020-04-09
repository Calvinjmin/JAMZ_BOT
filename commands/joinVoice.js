module.exports = ('message' , async message => {
    if (!message.guild) return;

    if(message.member.voice.channel) {
      if (!message.guild.voiceConnection) {
          message.member.voice.channel.join() .then (connection => {
          message.reply("Joined Channel");
        })
      }
    }
    else {
      message.reply("You are not currently in a voice channel.");
    }
});


