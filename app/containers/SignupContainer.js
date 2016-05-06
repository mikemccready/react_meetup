var React = require('react');
var SignupForm = require('../components/SignupForm');

var SignupContainer = React.createClass({
	getInitialState: function() {
		return{
			userInfo: {
				name: '',
				email: '',
				password: '',
				confirmPassword: ''
			}
		}
	},
	handleCheckPassword: function(e) {
		//update state
		var newUserInfo = this.state.userInfo;
		newUserInfo.password = e.target.value;
	    this.setState({
	      userInfo : newUserInfo
	    });

	    var password = newUserInfo.password;
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
			document.getElementById('confirm-password').disabled = false;
			document.getElementById('confirm-password').style.cursor = 'text';
			document.getElementById('confirm-password-label').style.color = '#ef5100';
		}else {
			document.getElementById('confirm-password').disabled = true;
			document.getElementById('confirm-password').style.cursor = 'not-allowed';
			document.getElementById('confirm-password-label').style.color = 'lightgray';
		}

	},
	handleConfirmPassword : function(e) {
		var newUserInfo = this.state.userInfo;
		newUserInfo.confirmPassword = e.target.value;
	    this.setState({
	      userInfo : newUserInfo
	    });

	    console.log(this.state.userInfo.password)
	    console.log(this.state.userInfo.confirmPassword)


	    if(this.state.userInfo.password !== newUserInfo.confirmPassword){
	    	document.getElementById('password-match').style.display = 'block';
	    	document.getElementById('submit-btn').disabled = true;
	    	// document.getElementById('submit-btn').style.cursor = 'not-allowed';
	    	// document.getElementById('submit-btn').style.color = 'lightgray';
	    	document.getElementById('submit-btn').className = 'disabled';

	    } else {
	    	document.getElementById('password-match').style.display = 'none';
	    	document.getElementById('submit-btn').disabled = false;
	    	// document.getElementById('submit-btn').style.color = '#ef5100';
	    	// document.getElementById('submit-btn').style.cursor = 'pointer';
	    	document.getElementById('submit-btn').className = 'active';
	    } 
	},
	render: function() {
		return(
			<div>
				<SignupForm 
					password={this.state.userInfo.password}
					onCheckPassword={this.handleCheckPassword}
					onConfirmPassword={this.handleConfirmPassword} />
			</div>	
		)
	}
});

module.exports = SignupContainer;