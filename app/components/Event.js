var React = require('react');

function Event(props) {
	console.log(props)
	return(
		<div>
			<h3>{props.title}</h3>
			hosted by: {props.host}
			<p>{props.location}</p>
			<hr/>
		</div>
	)
}

module.exports = Event;