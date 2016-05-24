var React = require('react');
var SignupForm = require('../components/SignupForm');
var ReactRouter = require('react-router');
var Link =  ReactRouter.Link;

var SignupContainer = React.createClass({
	getInitialState: function() {
		return{
			userInfo: {},
			validPassword: false,
			matchingPassword: false,
			moreInfoVisible: false
		}
	},
	handleChange : function (e) {
		if(e){
			var input = e.target.id;
			console.log(input)
			this.state.userInfo[input] = e.target.value;
			if(input === 'name' || input === 'email') {
				this.handleCheckBlank(e);
			}else if (input === 'password') {
				this.handleCheckPassword(e);
			}else if (input === 'confirmPassword') {
				this.handleConfirmPassword(e);
			}
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
	handleCheckPassword: function(e) {
	    var password = this.state.userInfo.password;
		var passingReq = [];
		var requirements = [
			{
				req: password.length >= 8 && password.length <= 20,
				prompt: 'character-length',
				passing: false
			},
			{
				req: password.match(/\d/g),
				prompt: 'password-number',
				passing: false			
			}
		];	

		for (var i = 0; i < requirements.length; i++) {
			if(requirements[i].req) {
				document.getElementById(requirements[i].prompt).style.display = 'none';
				requirements[i].passing = true;
			}else {
				document.getElementById(requirements[i].prompt).style.display = 'block';
				requirements[i].passing = false;
			}
		}

		// filter requirements list for passing requirements
		passingReq = requirements.filter(function(passingReq) {
	    	return passingReq.passing === true;
		});	

		if(passingReq.length === requirements.length) {
			document.getElementById('confirmPassword').disabled = false;
			document.getElementById('confirmPassword').style.cursor = 'text';
			document.getElementById('confirmPassword-label').style.color = 'rgba(0,0,0,.6)';
			this.state.userInfo.validPassword = true;
		}else {
			document.getElementById('confirmPassword').disabled = true;
			document.getElementById('confirmPassword').style.cursor = 'not-allowed';
			document.getElementById('confirmPassword-label').style.color = 'rgba(0,0,0,.3)';
			this.state.userInfo.validPassword = false;
		}
	},
	handleConfirmPassword : function(e) {
	    if(this.state.userInfo.password !== this.state.userInfo.confirmPassword){
	    	document.getElementById('password-match').style.display = 'block';
	    	this.state.userInfo.matchingPassword = false;
	    } else {
	    	document.getElementById('password-match').style.display = 'none';
	    	this.state.userInfo.matchingPassword = true;
	    }
	},
	checkInputs : function () {
		var u = this.state.userInfo;
		if (u.name !== '' && u.email !== '' && u.matchingPassword === true && u.validPassword === true){
			document.getElementById('submit-btn').disabled = false;
			document.getElementById('submit-btn').className = 'active';
		} else {
			document.getElementById('submit-btn').disabled = true;
			document.getElementById('submit-btn').className = 'disabled';			
		}
	},
	handleMoreInfo: function() {
		if(this.state.moreInfoVisible === false){
			document.querySelector('#additional-info').className = 'active';
			this.state.moreInfoVisible = true;
		} else {
			document.querySelector('#additional-info').className = 'hidden';
			this.state.moreInfoVisible = false;			
		}
	},
	handleSubmit: function (event) {
	  event.preventDefault();
	  document.getElementById('submit-overlay').style.display = 'block';
	},	
	render: function() {
		return(
			<div>
				<SignupForm 
					onSubmit={this.handleSubmit}
					onUpdateInput={this.handleChange}
					onMoreInfo={this.handleMoreInfo} />
				<div id="submit-overlay">
					<h1>Thanks for joining!</h1>
					<button id="submit-btn"><Link to='/events'>Browse Events</Link></button>
				</div>
			</div>	
		)
	}
});

module.exports = SignupContainer;