'use strict';

const user = require('../../config/user');

module.exports = () => {
	console.log('--------------------');
	console.log(123);
	console.log('--------------------');
	const Greeting = (
		return <h1>Hello {user.firstName + ' ' + user.lastName}</h1>
	);

	ReactDOM.render(
		Greeting,
		document.getElementById('greeting')
	);
};
