var React = require('react');
var SignupForm = require('../components/SignupForm');

var SignupContainer = React.createClass({
	render: function() {
		return(
			<SignupForm />
		)
	}
});

module.exports = SignupContainer;