var React = require('react');
var Event = require('../components/Event')
var axios = require('axios');

var EventsContainer = React.createClass({
	getInitialState: function() {
		return { meetups: [] };
	},
	componentDidMount: function() {
		axios.get(__dirname + 'mock-data.json')
		.then(function(response) {
			this.setState({meetups: response.data});
		}.bind(this))
	},
	render: function() {
        var meetupList = this.state.meetups.map(function(meetup){
            return <Event
            			key={meetup.id}
            			title={meetup.title}
            			host={meetup.host}
            			image={meetup.image}
            			location={meetup.city}
            		/>;
          })

        return  <div className="events-container">{ meetupList }</div>
	}
})

module.exports = EventsContainer;