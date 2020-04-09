module.exports = message => {
    var today = new Date()
    var date = today.getMonth() + "-" + (today.getDay() + 1) + "-" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return message.reply( "\nDate(M-D-Y): " + date + "\nTime(H-M-S): " + time );
}
