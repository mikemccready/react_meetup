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
		}else {
			document.getElementById('confirm-password').disabled = true;
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
	    } else {
	    	document.getElementById('password-match').style.display = 'none';
	    	document.getElementById('submit-btn').disabled = false;
	    } 
	},
	render: function() {
		return(
			<div>
				<h1>Sign up</h1>
				<SignupForm 
					password={this.state.userInfo.password}
					onCheckPassword={this.handleCheckPassword}
					onConfirmPassword={this.handleConfirmPassword} />
			</div>	
		)
	}
});

module.exports = SignupContainer;