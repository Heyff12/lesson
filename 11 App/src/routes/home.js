"use strict";

const router = require('express').Router();

module.exports = () => {

	router.get('/', (req, res) => {
		res.render('home', {title: 'Home'});
	});

	return router;

};