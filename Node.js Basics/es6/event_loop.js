const fs = require('fs')

for (let i = 1; i <= 5; ++i) {
	fs.readFile('../data/' + i + '.txt', (err, data) => {
		console.log(data.toString())
	})
}

console.log('here')
