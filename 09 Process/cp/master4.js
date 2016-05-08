"use strict";

const net = require('net');
const cpus = require('os').cpus();
const fork = require('child_process').fork;

let server = net.createServer();

server.listen(54321);

var workers = {};

var createWorker = function () {
	let worker = fork('./worker3.js');

	worker.on('exit', () => {
		console.log(`worker ${worker.pid} exited.`);
		delete workers[worker.pid];
		createWorker();
	});

	worker.send('server', server);
	workers[worker.pid] = worker;

	console.log(`create worker. pid: ${worker.pid}`);
};

for (let i = 0; i < cpus.length; i++) {
	createWorker();
}

process.on('exit', () => {
	for(let pid in workers){
		workers[pid].kill();
	}
});