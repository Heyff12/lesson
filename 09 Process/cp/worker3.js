"use strict";

const http = require('http');

var httpServer = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end(`handled by child: ${process.pid}\n`);
});

process.on('message', (msg, tcpServer) => {
	if(msg == 'server'){
		tcpServer.on('connection', socket => {
			httpServer.emit('connection', socket);
		});
	}
});

process.on('exit', () => {
	console.log(`worker: ${process.pid} exit`);
});