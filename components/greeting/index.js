'use strict';

const user = require('../../config/user');

module.exports = () => {

	const attrs = {
		classes: ['heading-1', 'qa-main-heading']
	};

	return `<h2 class="${attrs.classes.join(' ')}">Hello ${user.firstName} ${user.lastName}</h2>`;
	// const Greeting = (
	// 	return <h1>Hello {user.firstName + ' ' + user.lastName}</h1>
	// );
	//
	// ReactDOM.render(
	// 	Greeting,
	// 	document.getElementById('greeting')
	// );
};
