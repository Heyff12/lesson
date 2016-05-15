"use strict";

const router = require('express').Router();
const User = require('../models/user.js');

module.exports = () => {

	router.get('/', (req, res) => {
		res.render('register', {title: 'Register'});
	});

	router.post('/', (req, res) => {
		let username = req.body.username,
				password = req.body.password;

		let user = new User({
			username: username,
			password: password
		});

		user.save((err, ret) => {

			if(err){
				return res.render('register', {title: `Error: ${err}`});
			}

			res.redirect('/');
		});
	});

	return router;

};