// Modules
const { john, mike } = require('./03-names');
const Hii = require('./04-functions');

// when you import a module you actually invoke it
const data = require('./05-alternative-export');

Hii('peter');
Hii(john);
Hii(mike);

console.log(data);
