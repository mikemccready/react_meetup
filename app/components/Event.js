var React = require('react');

function Event(props) {
	return(
		<div className="event">
			<div className="event-info">
				<h3>{props.title}</h3>
				hosted by: {props.host}
				<p>{props.location}</p>
			</div>	
		</div>
	)
}

module.exports = Event;