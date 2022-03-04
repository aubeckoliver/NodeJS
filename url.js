var url = require('url');
var address = 'https://www.bbc.com/news/live/world-europe-60532634'

var q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
