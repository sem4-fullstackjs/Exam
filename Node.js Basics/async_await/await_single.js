const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)

let run = async () => {
	// promise version
	read('../data/1.txt').then(data => {
		console.log('promise:', data.toString())
	})

	// aync/await version
	const data = await read('../data/1.txt')
	console.log('async/await:', data.toString())
}

run()
