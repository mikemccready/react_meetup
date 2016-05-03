var React = require('react');
var NewEventForm = require('../components/NewEventForm');

var NewEventContainer = React.createClass({
	getInitialState: function() {
		return {
			eventInfo: {
				title: '',
				eventType: null,
				host: '',
				location: '',
				startDateTime: '',
			}		
		}
	},
	render: function() {
		return(
			<NewEventForm />
		)
	}
});

module.exports = NewEventContainer;