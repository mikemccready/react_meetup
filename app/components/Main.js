var React = require('react');
var Nav = require('./Nav.js');

var Main = React.createClass({
	render: function() {
		return(
			<div className='main-container'>	
				<Nav />
				<div style={{position: 'relative', top: '5em', margin: 0}}>
					{this.props.children}
				</div>	
			</div>			
		)
	}
});

module.exports = Main;