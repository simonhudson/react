'use strict';

const greeting = () => {
	const element = document.createElement('h1');
	element.innerHTML = 'Hello world';
	return element;
};
document.body.appendChild(greeting());
