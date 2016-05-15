var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Welcome() {
	return(
		<div className="welcome-page">
			<h1>Meetups</h1>
			<Link className='welcome-link' to='/signup'>Sign up</Link>
		</div>
	)
}

module.exports = Welcome;