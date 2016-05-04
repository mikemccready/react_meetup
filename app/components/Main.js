var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
	render: function() {
		return(
			<div className='main-container'>
				<h2 style={{display: 'inline-block', position: 'fixed', left: '1em', top: 0}}>Meetups</h2>
				<div style={{display: 'inline-block', position: 'fixed', right: 0}}>
					<Link to='/signup' style={{padding: '1em'}}>Sign up</Link>
					<Link to='/newEvent' style={{padding: '1em'}}>Create Event</Link>
					<Link to='/' style={{padding: '1em'}}>Events</Link>
				</div>
				<div style={{position: 'relative', top: '5em', margin: '0'}}>
					{this.props.children}
				</div>	
			</div>	
		)
	}
});

module.exports = Main;