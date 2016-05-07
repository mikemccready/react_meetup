var React =  require('react');
var ReactRouter = require('react-router');
var Link =  ReactRouter.Link;

function Nav() {
	return(
		<nav id="main-nav">
			<img src="./app/assets/icon.png" id="nav-icon" />
			<div style={{display: 'inline-block', position: 'fixed', right: 0, padding:'1em 0'}}>
				<Link className='nav-link' to='/signup' style={{padding: '1em'}}>Sign up</Link>
				<Link className='nav-link' to='/newEvent' style={{padding: '1em'}}>Create Event</Link>
				<Link className='nav-link' to='/' style={{padding: '1em'}}>Events</Link>
			</div>
		</nav>
	)
};


window.addEventListener("scroll", runOnScroll);

function runOnScroll() {
	if(window.scrollY > 20) {
		// document.getElementById('main-nav').style.backgroundColor = 'rgba(255,255,255,.33)';
		// document.getElementById('main-nav').style.backgroundColor = 'rgba(255,255,255,.33)';
		document.getElementById('main-nav').className = 'scrolled';
	} else {
		// document.getElementById('main-nav').style.backgroundColor = 'rgba(0,0,0,0)';
		// document.getElementById('main-nav').style.backgroundColor = 'rgba(255,255,255,.33)';
		document.getElementById('main-nav').className = 'top';	
	}
}

module.exports = Nav;