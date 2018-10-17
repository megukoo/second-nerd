﻿// ban user

exports.run = (client, message, args, level) => {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "Support Server",
            url: "https://discord.gg/" + process.env.supportServerCode,
            description: "Find information about Vannesa!\n**DISCLAIMER: While using the Cleverbot integration, your conversations may be viewed but not recorded for future reference.**",
            fields: [{
                name: "Info",
                value: `I am ${client.user.username}, the culimation of water is ice soup's creativity.\nI'm also a great listener. Just ping me.\nCurrent Guild Count: ${client.guilds.size}\nNumber of Users: ${client.users.size}`
            },

            {
                name: "Owners / Developers",
                value: "@water is ice soup#0907 - Owner and Developer"
            },
            {
                name: "Features",
                value: `Cleverbot (@ the bot with some text)\nTranslation\nSoon to be moderation\nEconomic system`
            },
            {
                name: "Special Thanks",
                value: "Special thanks to Flatbird, and Rewolf for helping testing the bot!\nThanks alot to Budgie for being a great help with the hosting!"
            },
            {
                name: "Invite Link",
                value: "It is up to you which permissions she has.\nhttps://discordapp.com/oauth2/authorize?client_id=411683313926012928&scope=bot&permissions=67136512"
            }
            ],
        },
    });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["info", "support"],
    permLevel: "User"
};

exports.help = {
    name: "support",
    category: "Info",
    description: "Shows bot information.",
    usage: "support",
};
