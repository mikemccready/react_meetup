var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Welcome() {
	return(
		<div className="welcome-page">
			<div className="text-block">
				<h1>Meetups</h1>
				<Link className='welcome-link' to='/signup'>Let's Party</Link>
			</div>	
		</div>
	)
}

module.exports = Welcome;