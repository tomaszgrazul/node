const url = require('url');

const urlToObj = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

console.log(urlToObj);