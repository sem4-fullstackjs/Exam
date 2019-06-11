async function SerialFlow() {
	let result1 = await doJob(1, 1)
	let result2 = await doJob(2, 2)
	let result3 = await doJob(3, 3)

	let finalResult = result1 + result2 + result3
	console.log(finalResult)
	return finalResult
}

async function ParallelFlow() {
	let result1 = doJob(1, 1)
	let result2 = doJob(2, 2)
	let result3 = doJob(3, 3)

	let finalResult = (await result1) + (await result2) + (await result3)

	console.log(finalResult)
	return finalResult
}

function doJob(x, sec) {
	return new Promise(resolve => {
		console.log('Start: ' + x)
		setTimeout(() => {
			console.log('End: ' + x)
			resolve(x)
		}, sec * 1000)
	})
}

// SerialFlow()
ParallelFlow()
