var React = require('react');
var NewEventForm = require('../components/NewEventForm');
var ReactRouter = require('react-router');
var Link =  ReactRouter.Link;

var NewEventContainer = React.createClass({
	getInitialState: function() {
		return {
			eventInfo: {}		
		}
	},
	handleChange : function (e) {
		if(e){
			var input = e.target.id;
			this.state.eventInfo[input] = e.target.value;
			if (e.target.required) {
				this.handleCheckBlank(e);
			}
			console.log(this.state.eventInfo)
		}
		this.checkInputs()
	},
	handleCheckBlank : function (e) {
		if (e.target.value.length < 1) {
			document.getElementById(e.target.id + '-valid').style.display = 'block';
		} else {
			document.getElementById(e.target.id + '-valid').style.display = 'none';
		}
	},
	checkInputs : function () {
		var e = this.state.eventInfo;
		if (e.name !== '' && e.host !== '' && e.location !== '' && e.startTime !== ''){
			document.getElementById('submit-btn').disabled = false;
			document.getElementById('submit-btn').className = 'active';
		} else {
			document.getElementById('submit-btn').disabled = true;
			document.getElementById('submit-btn').className = 'disabled';			
		}
	},
	handleSubmit: function (event) {
	  event.preventDefault();
	  document.getElementById('submit-overlay').style.display = 'block';
	},
	render: function() {
		return(
			<div>
				<NewEventForm 
					onUpdateInput={this.handleChange}
					onSubmit={this.handleSubmit}/>
				<div id="submit-overlay">
					<h1>Event created!</h1>
					<button id="submit-btn"><Link to='/events'>Browse Events</Link></button>
				</div>
			</div>			
		)
	}
});

module.exports = NewEventContainer;