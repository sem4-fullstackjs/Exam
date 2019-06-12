// https://www.youtube.com/watch?v=NV9sHLX-jZU

'use strict'
// Creating a House

// 'this' inside global scope
this.table = 'window table'

this.garage = {
	table: 'garage table'
}

console.log(this.garage.table)

// 'this' inside and object
let johnsRoom = {
	table: 'Johns table'
}

console.log(johnsRoom.table)

// 'this' inside a method
let alexsRoom = {
	table: 'Alexs table',
	cleanTable() {
		console.log(`Cleaning ${this.table}`)
	}
}

alexsRoom.cleanTable()

// 'this' inside a function
function cleanTable(soap) {
	console.log(`Cleaning ${this.table} using ${soap}`)
}

// 'call' function
cleanTable.call(this, 'some soap')
cleanTable.call(this.garage, 'some expensive soap')
cleanTable.call(johnsRoom, 'some really expensive soap')

// 'this' inside and inner function

/*
 * You can solve this four different ways, bind, call, pass or arrow function
 */
function cleanRoom(soap) {
	const innerFunction = _soap => {
		console.log(`Cleaning ${this.table} using ${_soap}`)
	}
	innerFunction(soap)
}

cleanRoom.call(this, 'some nice soap')

// 'this' inside a constructor
function createRoom(name) {
	this.table = `${name}s table`
}

createRoom.prototype.cleanTable = function(soap) {
	console.log(`Cleaning ${this.table} using ${soap}`)
}

const michaelsRoom = new createRoom('Michael')
const mariesRoom = new createRoom('Marie')

michaelsRoom.cleanTable('some nice soap')
mariesRoom.cleanTable('some expensive soap')

// 'this' inside a class
class createKitchen {
	constructor(name) {
		this.table = `${name}s table`
	}
	cleanTable(soap) {
		console.log(`Cleaning ${this.table} using ${soap}`)
	}
}
const sallysKitchen = new createKitchen('Sally')
const jakesKitchen = new createKitchen('Jake')

sallysKitchen.cleanTable('some good soap')
jakesKitchen.cleanTable('some bad soap')
