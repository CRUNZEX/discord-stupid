const services = require('../services')
const axios = require('axios')

/**
 *
 * @param {import('discord.js').Client} client
 * @param {import('discord.js').Message} message
 */
module.exports = async (client, message) => {
	if (message.author.bot) return

	await message.delete(0)

	const payload = {
		content: message.content,
		embeds: null,
		username: message.author.username,
		avatar_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.jpeg`,
		attachments: message.attachments,
	}

	const webhooks = await message.channel.fetchWebhooks()
	const webhook = webhooks.first()

	const urlWebhook = `https://discordapp.com/api/webhooks/${webhook.id}/${webhook.token}`
	await axios.post(urlWebhook, payload)
}
