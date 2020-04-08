require("dotenv").config
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()

fs.readdir("./events/", (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "jank") {
    msg.reply("Hello!")
  }
})
client.login("Njk3Mjk2NjI2Mzc2NTA3NDAy.Xo1QAA.FWuJjBI22ercABhN3Zekwg6LgOw")