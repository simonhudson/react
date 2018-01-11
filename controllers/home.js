'use strict';

const greeting = require('../components/greeting');

module.exports = (req, res, next) => {
	res.render('home', {
		greeting
	});
};
