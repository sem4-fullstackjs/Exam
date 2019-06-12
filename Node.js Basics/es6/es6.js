// arrow functions
let nums = [1, 2, 3, 4]
nums.forEach(num => {
	console.log(num * 2)
	// output: 2, 4, 6, 8
})

// =====

// block scoping with let
for (let i = 0; i <= 4; ++i) {
	setTimeout(() => {
		console.log(i)
		// output with let: 0, 1, 2, 3, 4
		// output wiht var: 5, 5, 5, 5, 5
	}, 1000)
}

// =====

// default params
function test1(a, b, c = 3) {
	console.log('default params:', a + b + c)
	// output: default params: 6
}
test1(1, 2)

// =====

// variadic function arguments
function sum(...nums) {
	console.log(nums.reduce((acc, a) => a + acc, 0))
}
sum(1, 5, 7, 9, 9, 18, 4, 6)
// output: 59

// =====

// spread operator
let a = [1, 2, 3]
let b = [...a, 4, 5]
console.log(b)
// output: [1, 2, 3, 4, 5]

// =====

// property shorthand
let c = 'c'
let d = 'd'

// old way - prior to es6
var e = { c: c, d: d }

// new way - after es5
var e = { c, d }

// =====

// computed object keys

let name = 'something'

let object = {
	// This dosn't have to be a variable
	[name]: 'cool'
}
console.log(object.something)
// output: cool

// =====

// method notation in objects
let methods = {
	foo() {
		console.log('foo')
	},
	bar() {
		console.log('bar')
	}
}

// old way

let oldMethods = {
	foo: function() {
		console.log('foo')
	},
	bar: function() {
		console.log('bar')
	}
}

// =====

// array destructoring
var nums = [1, 2, 3]
var [one, two, three] = nums
console.log(one, two, three)
// output: 1 2 3

// swap-a-roo

var [one, two] = [two, one]
console.log(one, two)
// output: 2 1

// =====

// object destructuring
// based on the name
var nums = { one: 1, two: 2, three: 3 }
var { three, two, one } = nums

console.log(one, two, three)
// output: 1 2 3

// =====

// classes, getters
class thing {
	constructor(_id) {
		this._id = _id
	}
	get id() {
		return this._id
	}
}

var t = new thing(555)
console.log(t.id)
// output: 555

// =====

// generators
function* range(start, end) {
	while (start < end) {
		yield start
		start += 1
	}
}

for (let i of range(0, 10)) {
	console.log(i)
}

/*
 *	There's alot more features in ES6 - However these are the onse
 *	that's classified as the more usefull out of them all
 *
 * 	A List of all the features can be foun here:
 * 	https://github.com/lukehoban/es6features
 */
