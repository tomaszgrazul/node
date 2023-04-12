const querystring = require('querystring');
const band = querystring.parse('name=beatles&members=john&members=paul&members=george&members=ringo');
 
console.log(band);

let user = {
    name: 'john',
    password: 'qwerty'
}

let stringFromObj = querystring.stringify(user);

console.log(stringFromObj);