var React = require('react');

function Event(props) {

	var date;
	var formatDate = function() {
		var from = props.date.split("/");
		var d = new Date(from[2], from[0], from[1]);
		var monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];
		var month = monthNames[d.getMonth()]
		date = month + " " + d.getDate();
	}();

	var imageURL = "url(" + props.image + ")";
	return(
		<div className="event" style={{backgroundImage: imageURL}}>
			<div className="event-location">
				<img src="./assets/icon.png" id="event-icon" />
				<h5>{props.location}</h5>
			</div>	
			<div className="event-info">
				<div className="basic-info">
					<p id="date">{date}</p>
					<h3>{props.title}</h3>
				</div>
				<div className="more-info">
					<p id="event-type">{props.event_type}</p>
					<h3>{props.title}</h3>			
					<p>Hosted by {props.host}<br />{date}, {props.start_time}</p>	
					<p>{props.address}<br/>
					{props.location}, {props.state}</p>
				</div>
			</div>	
		</div>
	)
}

module.exports = Event;