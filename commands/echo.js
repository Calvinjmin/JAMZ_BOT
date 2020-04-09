module.exports = message => {
    var temp = message.content.substring(6);
    return message.reply( temp )
}