var React = require('react');

function Event(props) {
	return(
		<div className="event">
			<h3>{props.title}</h3>
			hosted by: {props.host}
			<p>{props.location}</p>
		</div>
	)
}

module.exports = Event;