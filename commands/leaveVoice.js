module.exports = ('message' , async message => {

    /*

    Code currently does not work. Cannot find a method on the Discord.js
    API that allows the bot to disconnect from its current voice channel.

    ASSUME: Manually disconnect the bot from the channel

    **Updates to Come**

    console.log(message.guild.connection);
    if (message.guild.connection) {
        message.guild.voiceConnection.disconnect();
      }
    else {
        message.reply("The bot is currently in another voice channel");
    }
    */
      
});

