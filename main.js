const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"] , intents: ["GUILD_MESSAGES", "GUILDS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS"]});

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('bot is online!');
	client.user.setPresence({ activities: [{ name: 'Stardew Expansion Redux', type: 'PLAYING' }], status: 'online' });
});

client.on('message', message => {
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if(command === 'oom'){
	  message.channel.send('OutOfMemoryException errors on Windows mean that your game ran out of memory. The game only has access to a small part of your computers memory by default. See this page for more info and common fixes: https://stardewvalleywiki.com/Modding:Player_Guide/Troubleshooting#OutOfMemoryException_errors_.28Windows_only.29.');
  } else if (command === 'Log') {
	  message.channel.send('Can you upload your SMAPI log to https://smapi.io/log (see instructions on that page) and share the link here?');
	// ...
  }
	//thisisamessage.react("👋");


});

client.login('token goes here');
