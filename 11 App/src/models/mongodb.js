"use strict";

const mongoose = require('mongoose');
const port = require('../../config.js').dbPort;

mongoose.connect(`mongodb://localhost:${port}/demo`);

module.exports = mongoose;