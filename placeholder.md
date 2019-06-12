# Period-1

## Vanilla JavaScript

### Explain the differences between Java and JavaScript.

_You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features._

| Java                            | JavaScript                                                                                                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Compiled vs Interpreted         | Java is a compiled programming language.<br>Java is compiled into bytecode and run on a virtual machine                                                                                    | JavaScript is an interpreted scripting language.<br>JavaScript can be interpreted directly by a browser in the syntax it is written. |
| Static vs Dynamic Type Checking | Java uses static type checking, where the type of a variable is checked at compile-time. The programmer must specify the type (integer, double, string, etc.) of any variable they create. | JavaScript, like most scripting languages, uses dynamic typing, where type safety is verified at runtime. It is not required for a programmer to specify the type of any variable they create. |
| Concurrency                     | Java makes use of multiple threads to perform tasks in parallel.                                                                                                                           | JavaScript, particularly as it exists as Node.js in server-side applications, handles concurrency on one main thread of execution via a queue system called the event loop, and a forking system called Node Clustering. |
| Class Based vs Prototype Based  | Java follows class based inheritance—a top down, hierarchical, class-based relationship whereby properties are defined in a class and inherited by an instance of that class.              | In JavaScript, inheritance is prototypal—all objects can inherit directly from other objects. Hierarchy is accomplished in JavaScript by assigning an object as a prototype with a constructor function. |

### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript.

#### ES6 (es2015) + ES7

ES6 and ES7 is newer implementations of JavaScript, which implements some new features, like async/await. Our browsers don't understand these new implementations, which means that in order for the browser to understand our code, it has to be transpiled into ES5, which all modern browser understand. The most used transpilers for JavaScript is Babel or Webpack.

#### TypeScript

TypeScript is a strict syntactical superset of JavaScript, and adds optional static typing to the language. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs. TypeScript may be used to develop JavaScript applications for both client-side and server-side (Node.js) execution. TypeScript supports definition files that can contain type information of existing JavaScript libraries, this enables other programs to use the values defined in the files as if they were statically typed TypeScript entities. The TypeScript compiler, named `tsc`, is written in TypeScript. As a result, it can be compiled into regular JavaScript and can then be executed in any JavaScript engine (e.g. a browser). The compiler package comes bundled with a script host that can execute the compiler. It is also available as a Node.js package that uses Node.js as a host.

### Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.  
It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Node vs Java - similarities

-   Runs on a Virtual Machine
-   Runs on multiple platforms
-   You must include packages before you can use them
-   You must obtain packages not included in the base installation before you can use them

npm (short for Node.js package manager) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website.

Many modules is designed to do one thing, the Node echo system encourages to use such modules instead of one module that does everything

### Explain about the Event Loop in Node.js

Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing.

Watch this [video](https://www.youtube.com/watch?v=8aGhZQkoFbQ) about the Event Loop

A demonstration can be found under ./Node.js Basics/es6/event_loop.js

### Explain (some) of the purposes with the tools Babel and WebPack, using examples from the exercises

#### Babel

Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).

It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and template literals.

#### WebPack

ES6 modules allow the JavaScript developer to break their code up into manageable chunks, but the consequence of this is that those chunks have to be served up to the requesting browser, potentially adding dozens of additional HTTP requests back to the server — something we really ought to be looking to avoid. This is where webpack comes in.

Webpack is a module bundler. Its primary purpose is to process your application by tracking down all its dependencies, then package them all up into one or more bundles that can be run in the browser.

### Explain the purpose of “use strict” and Linters, exemplified with ESLint

The "use strict" directive was new in ECMAScript version 5. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. The purpose of "use strict" is to indicate that the code should be executed in "strict mode". With strict mode, you can not, for example, use undeclared variables.

"Use strict" and linters are tools to protect us form ourselves. They warn us when our code contains a syntax error, and tells us if the variable we defined or assigned a value isn't being used. This improves the quality of our code, and may save time we would have use on debuging.

## Explain using sufficient code examples the following features in JavaScript

### Variable/function-Hoisting

Hoisting means lifting up. A `var` declaration is lifted to the top of its scope.

```js
console.log(x)
var x = 10
```

is equivalent with

```js
var x
console.log(x)
x = 10
```

the declaration of x is hoisted not the assignment.
Like `var` declaration, a function is also hoisted

### this in JavaScript and how it differs from what we know from Java/.net.

`this` in JavaScript typically refers to the function it is called in, while in Java it refers to the class.

```js
function Car(make, model) {
	this.make = make
	this.model = model
	this.show = function() {
		setTimeout(function() {
			//This function gets it's own "this"
			console.log(this.make + ', ' + this.model)
		}, 0)
	}
}
var car = new Car('Volvo', 'V70')
car.show()
```

output

```
undefined, undefined
```

if a function is defined as a arrow function it does not get its own `this`

```js
function Car(make, model) {
	this.make = make
	this.model = model
	this.show = function() {
		setTimeout(() => {
			//This function doesn't gets it's own "this"
			console.log(this.make + ', ' + this.model)
		}, 0)
	}
}
var car = new Car('Volvo', 'V70')
car.show()
```

output

```
Volvo, V70
```

### Function Closures and the JavaScript Module Pattern

#### Closures

A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.  
The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

```js
function showName(firstName, lastName) {
	var nameIntro = 'Your name is '
	// this inner function has access to the outer function's variables, including the parameter
	function makeFullName() {
		return nameIntro + firstName + ' ' + lastName
	}
	return makeFullName()
}
showName('Michael', 'Jackson')
```

output

```
Your name is Michael Jackson
```

#### Module Pattern

The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.  
In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page.

```js
var modularpattern = (function() {
	// your module code goes here
	var sum = 0

	return {
		add() {
			sum = sum + 1
			return sum
		},
		reset() {
			return (sum = 0)
		}
	}
})()
console.log(modularpattern.add())
console.log(modularpattern.add())
console.log(modularpattern.reset())
```

output

```
1
2
0
```

### Immediately-Invoked Function Expressions (IIFE)

```js
;(function() {
	/*do stuff*/
})()
```

### JavaScripts Prototype

```js
function Person(first, last, age, eye) {
	this.firstName = first
	this.lastName = last
	this.age = age
	this.eyeColor = eye
}

Person.prototype.name = function() {
	return this.firstName + ' ' + this.lastName
}

var newPerson = new Person('John', 'Doe', 50, 'blue')

console.log(newPerson.name())
```

output

```
John Doe
```

### User-defined Callback Functions (writing your own functions that take a callback)

```js
function doHomework(subject, callback) {
	console.log(`Starting my ${subject} homework.`)
	callback()
}

doHomework('math', function() {
	console.log('Finished my homework.')
})
```

output

```
Starting my math homework.
Finished my homework.
```

### Explain the methods map, filter and reduce

`Array.prototype.map()`: The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

```js
const numbers = [2, 3, 4, 5]
const mappedNumbers = numbers.map(e => e * 2)
console.log(mappedNumbers)
```

output

```
[4, 6, 8, 10]
```

`Array.prototype.filter()`: The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

```js
const names = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik']
const filteredNames = names.filter(name => name.length <= 3)
console.log(filteredNames)
```

output

```
["Jan", "Bo"]
```

`Array.prototype.reduce()`: The `reduce()` method executes a reducer function (that you provide) on each member of the array resulting in a single output value.

The reducer function takes four arguments:

1. Accumulator (acc)
2. Current Value (cur)
3. Current Index (idx)
4. Source Array (src)

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.

```js
const numbers = [2, 3, 4, 5]
const reducer = (acc, cur, idx, src) => accumulator + currentValue)
console.log(numbers.reduce(reducer);
```

output

```
14
```

### Provide examples of user-defined reusable modules implemented in Node.js

```js
module.exports.makeCounter = function() {
	let privateCounter = 0
	function changeBy(val) {
		privateCounter += val
	}
	return {
		increment: function() {
			changeBy(1)
		},
		decrement: function() {
			changeBy(-1)
		},
		value: function() {
			return privateCounter
		}
	}
}
```

## ES6,7,8... and TypeScript

### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

#### let and const

With ES6 it is now possible to declare a variable that behaves more like we expect them to behave. While a `var` declaration is hoisted to the top of its scope a `let` or a `const` declaration is not hoisted and behaves like we know variable declarations from Java. The difference between a `let` and a `const` is that the `let` can be assigned a new value and the `const` can't.

#### arrow functions

```js
let nums = [1, 2, 3, 4]
nums.forEach(num => {
	console.log(num * 2)
})
```

output

```
2 4 6 8
```

#### `this`

# WATCH tHIS IDEO https://www.youtube.com/watch?v=NV9sHLX-jZU

#### rest parameters

```js
let a = [1, 2, 3]
let b = [...a, 4, 5]
console.log(b)
```

output

```
[1, 2, 3, 4, 5]
```

#### destructuring

**array destructoring**

```js
var nums = [1, 2, 3]
var [one, two, three] = nums
console.log(one, two, three)

// swap-a-roo
var [one, two] = [two, one]
console.log(one, two)
```

output

```
1 2 3
2 1
```

**object destructuring**

```js
// based on the name
var nums = { one: 1, two: 2, three: 3 }
var { three, two, one } = nums

console.log(one, two, three)
```

output

```
1 2 3
```

#### sets

It's basicly an array that can only contain unique values

```js
let s = new Set()
s.add('hello')
	.add('goodbye')
	.add('hello')
console.log(s.size === 2) // no duplicate entries
s.has('hello') === true
for (let key of s.values()) // insertion order
	console.log(key)
```

output

```
true
hello
goodbye
```

#### maps

A map with key values pairs (keys are unique, values are not)

```js
let m = new Map()
m.set('Hello', 1)
m.set('world', 8)
m.set('world', 84)
m.set('Hi', 1)
for (let [key, val] of m.entries()) console.log(key + ' = ' + val)
```

output

```
Hello = 1
World = 84
Hi = 1
```

### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.

```js
//  lib/math.js
export function sum(x, y) {
	return x + y
}
export var pi = 3.141593

//  someApp.js
import * as math from 'lib/math'
console.log('2π = ' + math.sum(math.pi, math.pi))

//  otherApp.js
import { sum, pi } from 'lib/math'
console.log('2π = ' + sum(pi, pi))
```

### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.

```js
class Shape {
	color
	constructor(color) {
		this.color = color
	}
}

class square extends Shape {
	length
	constructor(color, length) {
		super(color)
		this.length = length
	}
}
```

JavaScript Object inheritance is Prototype based. ES6 classes are just syntactic sugar to make it look similar to OOP languages like Java. Behind the scene, no Class based inheritance but Prototype based inheritance.

### Provide examples with es-next, running in a browser, using Babel and Webpack

Examples can be found [here](https://github.com/sem4-fullstackjs/Period-1/tree/master/WebpackExercises)

### Provide a number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics

Examples can be found [here](https://github.com/sem4-fullstackjs/Period-1/tree/master/TypeScriptExercises)

### Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)

Each proposal for an ECMAScript feature goes through the following maturity stages, starting with stage 0. The progression from one stage to the next one must be approved by TC39.

#### Stage 0: strawman

**What is it?** A free-form way of submitting ideas for evolving ECMAScript. Submissions must come either from a TC39 member or a non-member who has registered as a TC39 contributor.

**What’s required?** The document must be reviewed at a TC39 meeting (source) and is then added to the page with stage 0 proposals.

#### Stage 1: proposal

**What is it?** A formal proposal for the feature.

**What’s required?** A so-called champion must be identified who is responsible for the proposal. Either the champion or a co-champion must be a member of TC39 (source). The problem solved by the proposal must be described in prose. The solution must be described via examples, an API and a discussion of semantics and algorithms. Lastly, potential obstacles for the proposal must be identified, such as interactions with other features and implementation challenges. Implementation-wise, polyfills and demos are needed.

**What’s next?** By accepting a proposal for stage 1, TC39 declares its willingness to examine, discuss and contribute to the proposal. Going forward, major changes to the proposal are expected.

#### Stage 2: draft

**What is it?** A first version of what will be in the specification. At this point, an eventual inclusion of the feature in the standard is likely.

**What’s required?** The proposal must now additionally have a formal description of the syntax and semantics of the feature (using the formal language of the ECMAScript specification). The description should be as complete as possible, but can contain todos and placeholders. Two experimental implementations of the feature are needed, but one of them can be in a transpiler such as Babel.

**What’s next?** Only incremental changes are expected from now on.

#### Stage 3: candidate

**What is it?** The proposal is mostly finished and now needs feedback from implementations and users to progress further.

**What’s required?** The spec text must be complete. Designated reviewers (appointed by TC39, not by the champion) and the ECMAScript spec editor must sign off on the spec text. There must be at least two spec-compliant implementations (which don’t have to be enabled by default).

**What’s next?** Henceforth, changes should only be made in response to critical issues raised by the implementations and their use.

#### Stage 4: finished

**What is it?** The proposal is ready to be included in the standard.

**What’s required?** The following things are needed before a proposal can reach this stage:

-   Test 262 acceptance tests (roughly, unit tests for the language feature, written in JavaScript).
-   Two spec-compliant shipping implementations that pass the tests.
-   Significant practical experience with the implementations.
-   The ECMAScript spec editor must sign off on the spec text.

**What’s next?** The proposal will be included in the ECMAScript specification as soon as possible. When the spec goes through its yearly ratification as a standard, the proposal is ratified as part of it.

## Callbacks, Promises and async/await

### Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.  
A `Promise` is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.  
A `Promise` is in one of these states:

-   pending: initial state, neither fulfilled nor rejected.
-   fulfilled: meaning that the operation completed successfully.
-   rejected: meaning that the operation failed.

A pending promise can either be _fulfilled_ with a value, or _rejected_ with a reason (error). When either of these options happens, the associated handlers queued up by a promise's `then` method are called.  
If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

As the `Promise.prototype.then()` and `Promise.prototype.catch()` methods return promises, they can be chained.

Check out examples here: ./Node.js Basics/promise

#### Example(s) that demonstrate how to avoid the callback hell (“Pyramid of Doom")

**Pyramid of Doom**

```js
doSomething(function(responseOne) {
	doSomethingElse(responseOne, function(responseTwo, err) {
		if (err) {
			handleError(err)
		}
		doMoreStuff(responseTwo, function(responseThree, err) {
			if (err) {
				handleAnotherError(err)
			}
			doFinalThing(responseThree, function(err) {
				if (err) {
					handleAnotherError(err)
				}
				// Complete
			}) // end doFinalThing
		}) // end doMoreStuff
	}) // end doSomethingElse
}) // end doSomething
```

**Solution**

```js
doSomething()
	.then(doSomethingElse)
	.catch(handleError)
	.then(doMoreStuff)
	.then(doFinalThing)
	.catch(handleAnotherError)
```

#### Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel

```js
var arrayOfPromises = [] // array containing promises

Promise.all(arrayOfPromises)
	.then(function(arrayOfResults) {
		/* Do something when all Promises are resolved */
	})
	.catch(function(err) {
		/* Handle error is any of Promises fails */
	})
```

Another example [here](https://gist.github.com/Gonron/7cc494d92ca0c801f2ec5129cc9fcbc7)

#### Example(s) that demonstrate how to implement our own promise-solutions.

```js
// old
return new Promoise((resolve, object) => {
	Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
		if (err) reject(err)
		else resolve(newFriend)
	})
})

// new
return await Friends.findOneAndUpdate({ _id: input.id }, input, { new: true })
```

#### Example(s) that demonstrate error handling with promises

```js
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
```

### Explain about JavaScripts async/await

_How it relates to promises and reasons to use it compared to the plain promise API._

Async Await is syntactic sugar that changes the .then notation to more readable syntax. Instead of making a . connection between the promises the keyword awaitcan be used instead.

```js
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
```

### Provide examples to demonstrate:

#### Why this often is the preferred way of handling promises

```js
function async myFunc() {
    const res = await fetch(...)
    const json = res.json()
    // ...
}
```

#### Error handling with async/await

```js
const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)

let run = async () => {
	// promise version
	read('../data/1.txt')
		.then(data => {
			console.log('promise:', data.toString())
		})
		.catch(err => {
			// handle error
		})

	// aync/await version
	try {
		const data = await read('../data/1.txt')
		console.log('async/await:', data.toString())
	} catch (err) {
		// handle error
	}
}

run()
```

#### Serial or parallel execution with async/await.

sync/await makes asynchronous code look and behave like synchronous code

```js
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
```

output

```
Serial:
Start: 1
End: 1
Start: 2
End: 2
Start: 3
End: 3
6

Parallel:
Start: 1
Start: 2
Start: 3
End: 1
End: 2
End: 3
6
```

# Period-2

## Node.js/Express

### Why would you consider a Scripting Language as JavaScript as your Backend Platform?

### Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat

#### Pros

##### Robust technology stack

Using Node.js for backend, you automatically get all the pros of full stack JavaScript development, such as:

-   better efficiency and overall developer productivity
-   code sharing and reuse
-   speed and performance
-   easy knowledge sharing within a team
-   huge number of free tools

Consequently, your team is a lot more flexible, the development is less time-consuming and as a result you get fast and reliable software.

Despite a common belief, with full stack web development you are in no way limited to the traditional MEAN (MongoDB, Express.js, AngularJS, and Node.js) stack. The only must-have in this case is Node.js (there is no alternative in JavaScript for backend programming). The rest of the technologies within this stack are optional and may be replaced with some other tools providing similar functionality (read about the alternatives in our separate article).

##### Fast and event-based

When using a common language for both client- and server-side, synchronization happens fast, which is especially helpful for event-based, real-time applications. Thanks to its asynchronous, non-blocking, single-threaded nature, Node.js is a popular choice for online gaming, chats, video conferences, or any solution that requires constantly updated data.

Not only does app performance benefit from Node.js’ lightness, the team’s productivity will increase as well. Developers trained in frontend JavaScript can start programming the server side with the minimum learning curve. With the same language on both sides, you can reuse code on front-end and back-end by wrapping it into modules and creating a new level of abstraction.

##### Scalable technology for microservices

Since it’s a lightweight technology tool, using Node.js for microservices architecture is a great choice. This architectural style is best described by Martin Fowler and James Lewis as “an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms, often an HTTP resource API.”

Accordingly, breaking the application logic into smaller modules, microservices, instead of creating a single, large monolithic core, you enable better flexibility and lay the groundwork for further growth. As a result, it is much easier to add more microservices on top of the existing ones than to integrate additional features with the basic app functionality.

![Monolithic vs Microservices](https://www.altexsoft.com/media/2016/11/The-difference-between-the-monolithic-and-microservices-architecture-1.png)

With each microservice communicating with the database directly through streams, such architecture allows for better performance and speed of application.

##### Rich ecosystem

One word – npm, a default Node.js package manager, it also serves as a marketplace for open source JavaScript tools, which plays an important role in the advance of this technology. With about 350,000 tools available in the npm registry as of now, and over 10,000 new ones being published every week, the Node.js ecosystem is quite rich.

With such a vast variety of free tools accessible in a few clicks, there is a huge potential for the use of Node.js. At the same time, open source software enjoys a growing popularity as it allows you to build new solutions reducing the overall costs of development and time to market.

#### Cons

##### Performance bottlenecks and design issues

Two of the most argued about aspects of Node.js programming are its insufficiency with heavy computations and the so-called “callback hell”. Before we get into too many details, let’s figure out what’s what.

As we know, JavaScript (and, as a result, Node.js) is asynchronous by nature and has a non-blocking I/O (input/output) model. This means, it can process several simple tasks (for example, read/write database queries) queued in the background without blocking the main thread and do so quickly.

At the same time, Node.js is a single-threaded environment, which is often considered a serious drawback of the technology. Indeed, in some cases, a CPU-bound task (number crunching, various calculations) can block the event loop resulting in seconds of delay for all Node.js website users.

This represents a serious issue. That is why, to avoid it, it is recommended not to use Node.js with computation-heavy systems.

Due to its asynchronous nature, Node.js relies heavily on callbacks, the functions that run after each task in the queue is finished. Keeping a number of queued tasks in the background, each with its callback, might result in the so-called callback hell, which directly impacts the quality of code. Simply put, it’s a “situation where callbacks are nested within other callbacks several levels deep, potentially making it difficult to understand and maintain the code.”

Yet, this is often considered a sign of poor coding standards and lack of experience with JavaScript and Node.js in particular.

##### Immaturity of tooling

Although, the core Node.js modules are quite stable and can be considered mature, there are many tools in the npm registry which are either of poor quality or not properly documented/tested. Moreover, the registry itself isn’t structured well enough to offer the tools based on their rating or quality. Hence it might be difficult to find the best solution for your purposes without knowing what to look for.

The fact that the Node.js ecosystem is mostly open source, has its impact as well. While the quality of the core Node.js technology is supervised by Joyent and other major contributors, the rest of the tools might lack the quality and high coding standards set by global organizations.

#### Conclusion

Obviously, with all the listed Node.js advantages and disadvantages, the technology is no silver bullet. But neither is Java, .Net framework or PHP. Yet, there are specific cases where each one of the technologies perform best. For Node.js, these are real-time applications with intense I/O, requiring speed and scalability.

This might be social networks, gaming apps, live chats or forums as well as stock exchange software or ad servers, where speed is everything. Fast and scalable, Node.js is the technology of choice for data-intensive, real-time IoT devices and applications.

Due to its non-blocking architecture, Node.js works well for encoding and broadcasting video and audio, uploading multiple files, and data streaming.

Recently, Node.js has been actively used in enterprise-level software. While there is still much argument about this, many large companies and global organizations, such as NASA, have already adopted Node.js. And the enterprise Node.js ecosystem continues to mature.

Yet, you can’t choose a language or tool just because another super-successful company did. It makes no sense to look at the others when your product and your business is at stake. You need to get your priorities straight and clearly identify the benefits the technology will give you, without forgetting about the hidden drawbacks.

### Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server

#### Single Threaded Event Loop Model Processing Steps

### Explain briefly how to deploy a Node/Express application including how to solve the following deployment problems:

#### Ensure that you Node-process restarts after a (potential) exception that closed the application

#### Ensure that you Node-process restarts after a server (Ubuntu) restart

#### Ensure that you can take advantage of a multi-core system

#### Ensure that you can run “many” node-applications on a single droplet on the same port (80)

### Explain the difference between “Debug outputs” and application logging. What’s wrong with console.log(..) statements in our backend-code

#### Disadvantages of console

#### Logging frameworks

### Demonstrate a system using application logging and “coloured” debug statements

#### Colored debug statements:

### Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript + relevant packages

### Explain, using relevant examples, the Express concept; middleware

### Explain, using relevant examples, how to implement sessions and the legal implications of doing this

### Compare the express strategy toward (server side) templating with the one you used with Java on second semester

### Demonstrate a simple Server Side Rendering example using a technology of your own choice (pug, EJS, ..)

### Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express and show how you can "test" all the four CRUD operations programmatically using, for example, the Request package

### Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code

### Explain, using relevant examples, different ways to mock out databases, HTTP-request etc.

### Explain, preferably using an example, how you have deployed your node/Express applications, and which of the Express Production best practices you have followed

## # NoSQL, MongoDB and Mongoose

### Explain, generally, what is meant by a NoSQL database

### Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL

### Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB

### Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB

### Explain the benefits of using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations

### Explain the “6 Rules of Thumb: Your Guide Through the Rainbow” as to how and when you would use normalization vs. denormalization
