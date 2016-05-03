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
		var self = this;
		axios.get(__dirname + 'mock-data.json')
		.then(function(response) {
			self.setState({meetups: response.data});
		})
	},
	render: function() {
		var meetups = this.state.meetups;
        var meetupList = meetups.map(function(name){
                        return <Event />;
                      })

        return  <div>{ meetupList }</div>
	}
})

module.exports = EventsContainer;