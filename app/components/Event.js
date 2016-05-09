var React = require('react');

function Event(props) {
	return(
		<div className="event">
			<div className="event-location">
				<img src="./app/assets/icon.png" id="event-icon" />
				<h5>{props.location}</h5>
			</div>	
			<div className="event-info">
				<h3>{props.title}</h3>
				hosted by: {props.host}
			</div>	
		</div>
	)
}

module.exports = Event;