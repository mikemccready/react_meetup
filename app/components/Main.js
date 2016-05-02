var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
	render: function() {
		return(
			<div className='main-container'>
				<h1>Meetups</h1>
				<Link to='/signup'>Sign up</Link>
				{this.props.children}
			</div>	
		)
	}
});

module.exports = Main;