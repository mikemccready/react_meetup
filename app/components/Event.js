var React = require('react');

function Event(props) {
	// console.log(props)
	var imageURL = "url(" + props.image + ")";
	return(
		<div className="event" style={{backgroundImage: imageURL}}>
			<div className="event-location">
				<img src="./assets/icon.png" id="event-icon" />
				<h5>{props.location}</h5>
			</div>	
			<div className="event-info">
				<p>{props.host}</p>
				<h3>{props.title}</h3>
			</div>	
		</div>
	)
}

module.exports = Event;