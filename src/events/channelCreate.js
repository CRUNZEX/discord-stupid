const services = require('../services')

/**
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Channel} channel
 */
module.exports = async (client, channel) => {
	console.log(channel)
	channel
		.createWebhook(channel.name, {
			avatar: '',
		})
		.then((webhook) => console.log(`Created webhook ${webhook}`))
		.catch(console.error)
}
