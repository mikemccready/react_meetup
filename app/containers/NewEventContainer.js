var React = require('react');
var NewEventForm = require('../components/NewEventForm');

var NewEventContainer = React.createClass({
	render: function() {
		return(
			<NewEventForm />
		)
	}
});

module.exports = NewEventContainer;