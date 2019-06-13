const fs = require('fs')
const util = require('util')

// old
// fs.readFile('../data/1.txt', (err, data1) => {
// 	fs.readFile('../data/2.txt', (err, data2) => {
// 		fs.readFile('../data/3.txt', (err, data3) => {
// 			console.log(data1.toString())
// 			console.log(data2.toString())
// 			console.log(data3.toString())
// 		})
// 	})
// })

// new
var read = util.promisify(fs.readFile)

Promise.all([read('../data/1.txt'), read('../data/2.txt'), read('../data/3.txt')])
	.then(data => {
		const [data1, data2, data3] = data

		console.log(data1.toString())
		console.log(data2.toString())
		console.log(data3.toString())
	})
	.catch(err => {
		console.log(err)
	})
