const os = require('os');

// log cpu info
console.log(os.cpus());

// log os platform  // win32
console.log(os.platform());

// log host name  // S-PC
console.log(os.hostname());

// logs user info
// {
//   uid: -1,
//   gid: -1,
//   username: 'sk',
//   homedir: 'C:\\Users\\sk',
//   shell: null
// }
console.log(os.userInfo());

// logs machine architecture  // x86_64
console.log(os.machine());

// log architecture // x64
console.log(os.arch());

// logs free memory
console.log(os.freemem());

// logs system uptime
console.log(os.uptime());

// logs user os version
console.log(os.version());

console.log(os.totalmem());

console.log(os.type());
