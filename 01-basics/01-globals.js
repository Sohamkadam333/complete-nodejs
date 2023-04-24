// require
// process
// module

// path to current directory name
console.log(__dirname);

// filename name
console.log(__filename);

// Run after every 1 sec
setInterval(() => {
	console.log('Hello World');
}, 1000);

// Run after 1 sec only once
setTimeout(() => {
	console.log('Hello');
}, 1000);
