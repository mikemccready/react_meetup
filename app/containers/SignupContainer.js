var React = require('react');
var SignupForm = require('../components/SignupForm');

var SignupContainer = React.createClass({
	getInitialState: function() {
		return{
			userInfo: {
				name: '',
				email: '',
				password: ''
			}
		}
	},
	handleCheckPassword: function(e) {
		console.log(this.state.userInfo.password)
		var newUserInfo = this.state.userInfo;
		newUserInfo.password = e.target.value;
	    this.setState({
	      userInfo : newUserInfo
	    });
	},
	render: function() {
		return(
			<div>
				<h1>Sign up</h1>
				<SignupForm 
					password={this.state.userInfo.password}
					onCheckPassword={this.handleCheckPassword}/>
			</div>	
		)
	}
});

module.exports = SignupContainer;