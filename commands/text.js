module.exports = message => {
    if (message.content.startsWith("!test")){
        return message.reply(`I can't kick this user. Sorry!`)
    }
}