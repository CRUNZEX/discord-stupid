const fs = require('fs')

/**
 * @param {String} log
 */
module.exports = (log) => {
	console.log(log)

	const date = new Date()
	fs.createWriteStream('log.txt', {
		flags: 'a',
	}).write(`${date.toISOString()}, ${log}\n`)
}
