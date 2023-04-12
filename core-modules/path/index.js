const path = require('path');

const filname = path.basename(__dirname + '/tmp/index.html');

const filnameNoExt = path.basename(__dirname + '/tmp/index.html', 'html');

console.log(filname);
console.log(filnameNoExt);


const dirname = path.dirname(__dirname + '/tmp/index.html');

console.log(dirname);


const ext = path.extname('/tmp/index.html');

console.log(ext);


const patseFile = path.parse('/tmp/index.html');

console.log(patseFile);


const newPath = path.join(__dirname, 'tmp');

console.log(newPath);