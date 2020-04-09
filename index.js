require("dotenv").config()

//Initalizing Variables
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  //Loops through each javascript file in the events folder
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split(".")[0]
    client.on(eventName, (...args) => eventHandler(client, ...args))
  })
})

client.login(process.env.BOT_TOKEN)