const services = require('../services')

/**
 *
 * @param {import('discord.js').Client} client
 */
module.exports = (client) => {
	services.log(`Logged in as ${client.user.tag}!`)
}
