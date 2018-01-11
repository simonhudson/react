'use strict';

const user = {
	firstName: 'Joe',
	lastName: 'Bloggs'
};

const formatName = (user) => `${user.firstName} ${user.lastName}`;

const Greeting = (
	<h1>
		Hello {formatName(user)}
	</h1>
);

ReactDOM.render(
	Greeting,
	document.getElementById('greeting')
);
