const Discord = require('discord.js')
const bot = new Discord.Client()
const TOKEN = 'ODY1NTQ1ODMzNTA4MzcyNDkw.YPFkXw._Yd1AwCnELn2_SJCt3q8KEqxRoA'
const prefix = 't!'

bot.on('ready', () => {
    console.log('Der Bot ist nun Online!')

    bot.user.setPresence({
        activity: {
            name: 't!help',
            type: 'PLAYING',
        },
        status: 'online'
    })
})

bot.login(process.env.token)