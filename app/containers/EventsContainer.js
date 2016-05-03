var React = require('react');
var Event = require('../components/Event')
var axios = require('axios');

// var meetups = axios.get(__dirname + 'mock-data.json')
// .then(function(response) {
// 	return response.data;
// }).catch(function(err) {
// 	console.warn('Could not retrieve meetups', err)
// })

var EventsContainer = React.createClass({
	getInitialState: function() {
		return { meetups: [] };
	},
	componentDidMount: function() {
		// var self = this;
		axios.get(__dirname + 'mock-data.json')
		.then(function(response) {
			this.setState({meetups: response.data});
		}.bind(this))
	},
	render: function() {
        var meetupList = this.state.meetups.map(function(meetup){
                        return <Event
                        			title={meetup.title}
                        			host={meetup.host}
                        			location={meetup.location}
                        		/>;
                      })

        return  <div>{ meetupList }</div>
	}
})

module.exports = EventsContainer;