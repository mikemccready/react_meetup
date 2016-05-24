var React = require('react');
var NewEventForm = require('../components/NewEventForm');

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
	},checkInputs : function () {
		var e = this.state.eventInfo;
		if (e.name !== '' && e.host !== '' && e.location !== '' && e.startTime !== ''){
			document.getElementById('submit-btn').disabled = false;
			document.getElementById('submit-btn').className = 'active';
		} else {
			document.getElementById('submit-btn').disabled = true;
			document.getElementById('submit-btn').className = 'disabled';			
		}
	},
	render: function() {
		return(
			<NewEventForm onUpdateInput={this.handleChange}/>
		)
	}
});

module.exports = NewEventContainer;