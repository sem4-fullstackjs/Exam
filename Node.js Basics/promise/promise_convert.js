const fs = require('fs')
const util = require('util')

// old
// fs.readFile('../data/1.txt'),
// 	(err, data) => {
// 		console.log(data.toString())
// 	}

// new
new Promise((resolve, reject) => {
	fs.readFile('../data/1.txt', (err, data) => {
		if (err) {
			reject(err)
		} else {
			resolve(data)
		}
	})
})
	.then(data => {
		console.log('promise', data.toString())
	})
	.catch(err => {
		console.log(err)
	})

// new with util

var read = util.promisify(fs.readFile)
read('../data/1.txt')
	.then(data => {
		console.log('util-module:', data.toString())
	})
	.catch(err => {
		console.log(err)
	})

console.log('Prove of how awesome promises is!')
