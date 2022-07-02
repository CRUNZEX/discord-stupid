const requestEvent = (event) => require(`../events/${event}`)

/**
 *
 * @param {import('discord.js').Client} client
 */
module.exports = (client) => {
	client.once('ready', () => requestEvent('ready')(client))
	client.on('messageCreate', (message) => {
		// requestEvent('eventTest')(client, message)
		requestEvent('message')(client, message)
	})
	client.on('channelCreate', (channel) =>
		requestEvent('channelCreate')(client, channel),
	)
	client.on('guildCreate', (guild) =>
		requestEvent('guildCreate')(client, guild),
	)
}
