"use strict";

const router = require('express').Router();

module.exports = () => {

	router.get('/', (req, res) => {
		res.render('register')
	});

	router.post('/', (req, res) => {

	});

	return router;

};