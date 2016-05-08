"use strict";

const os = require('os');
const fork = require('child_process').fork;

for(let i = 0, len = os.cpus().length; i < len; i++){
	fork('./worker1.js');
}