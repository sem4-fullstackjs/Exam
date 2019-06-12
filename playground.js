//Set

let s = new Set()
s.add('hello')
	.add('goodbye')
	.add('hello')
console.log(s.size === 2) // no duplicate entries
s.has('hello') === true
for (let key of s.values()) // insertion order
	console.log(key)

//Map
let m = new Map()
m.set('Hello', 1)
m.set('world', 8)
m.set('world', 84)
m.set('Hi', 1)
for (let [key, val] of m.entries()) console.log(key + ' = ' + val)
