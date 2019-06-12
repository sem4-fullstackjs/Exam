const promise = new Promise((resolve, reject) => {
	resolve('good')
	// reject('bad')
})
	.then(value => {
		console.log('value', value)
	})
	.catch(err => {
		console.log('err', err)
	})

// some_async_function()
// .then(value => {
//     console.log('value', value)
// })
// .catch(err => {
//     console.log('err', err)
// })

Promise.resolve(null)
	.then(value => {
		console.log('value', value)
	})
	.catch(err => {
		console.log('err', err)
	})

Promise.reject(null)
	.then(value => {
		console.log('value', value)
	})
	.catch(err => {
		console.log('err', err)
	})
