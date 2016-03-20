var Readable = require('stream').Readable;

var rs = new Readable();
rs.push(new Buffer('Hello'));
rs.push(null);

rs.pipe(process.stdout);
