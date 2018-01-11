'use strict';

var Heading = React.createClass({
	render: function() {
		return (
			<h1>{this.props.text}</h1>
		);
	}
});

ReactDOM.render(
	<Heading text="Hello"/>,
	document.getElementById('main')
);
