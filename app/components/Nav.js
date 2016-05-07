var React =  require('react');
var ReactRouter = require('react-router');
var Link =  ReactRouter.Link;

function Nav() {
	return(
		<nav>
			<img src="./app/assets/icon.png" id="nav-icon" />
			<div style={{display: 'inline-block', position: 'fixed', right: 0, padding:'1em 0'}}>
				<Link className='nav-link' to='/signup' style={{padding: '1em'}}>Sign up</Link>
				<Link className='nav-link' to='/newEvent' style={{padding: '1em'}}>Create Event</Link>
				<Link className='nav-link' to='/' style={{padding: '1em'}}>Events</Link>
			</div>
		</nav>
	)
};

module.exports = Nav;