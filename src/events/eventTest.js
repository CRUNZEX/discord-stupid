const services = require('../services')

/**
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports = async (client, message) => {
	if (message.author.bot) return

	// const test = message.guild;
	const channelGet = client.guilds.cache
		.get('992641070213111819')
		.channels.cache.each(async (channel) => {
			if (channel.type == 'GUILD_TEXT') {
				const webhooks = await channel.fetchWebhooks()
				const webhook = webhooks.find((wh) => wh.token)
				// console.log("print-> ",webhook);
				if (!webhook) {
					channel
						.createWebhook(channel.name, {
							avatar: '',
						})
						.then((webhook) =>
							console.log(`Created webhook ${webhook}`),
						)
						.catch(console.error)
				} else {
					console.log(`${channel.name} | ${channel.type}`)
				}
			}
		})
	// console.log(channelGet);
}
