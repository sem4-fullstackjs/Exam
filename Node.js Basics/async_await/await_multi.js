const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)

let run = async () => {
	// promise version
	Promise.all([read('../data/1.txt'), read('../data/2.txt'), read('../data/3.txt')]).then(
		data => {
			const [data1, data2, data3] = data

			console.log(data1.toString())
			console.log(data2.toString())
			console.log(data3.toString())
		}
	)

	// async/await
	const [data1, data2, data3] = await Promise.all([
		read('../data/1.txt'),
		read('../data/2.txt'),
		read('../data/3.txt')
	])
	console.log(data1.toString())
	console.log(data2.toString())
	console.log(data3.toString())
}

run()
