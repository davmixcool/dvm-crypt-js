var lib = require('./index.js');

var hash = lib.encrypt('David');

var string = lib.decrypt(hash);

console.log(hash+' : '+string);