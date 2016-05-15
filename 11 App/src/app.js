"use strict";

const express = require('express');
const exp_hbs = require('express-handlebars');
const path = require('path');
const router = require('./routes/index.js')
const conf = require('../config.js');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', exp_hbs({
	defaultLayout: 'main',
	extname: '.hbs'
}));
app.set('view engine', '.hbs');

router(app);

app.listen(conf.port, () => {
	console.log(`server listening port ${conf.port}`);
});