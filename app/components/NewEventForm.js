var React = require('react');

function NewEventForm(props) {
	return(
		<form onSubmit={props.onSubmit} className="form">
			<label for="title">
				<span className="form-label">Event Name</span>
				<span id="name-valid" style={{display: 'none'}}>Please enter an event name</span>
				<input type="text"
					id="name" 
					placeholder="Birthday Party"
					autoFocus={focus}
					onBlur={props.onUpdateInput}
					onChange={props.onUpdateInput}
					required>
				</input>
			</label>
			<label for="event-type">
				<span className="form-label">Type of event</span>
				<input id="event-type" 
					list="events" 
					name="myEvent" 
					required
					placeholder="Cocktail Hour" 
					onBlur={props.onUpdateInput}
					onChange={props.onUpdateInput}
					/>
			</label>	
			<datalist id="events">
				<option value="Birthday Party" />
				<option value="Cocktail Hour" />
				<option value="Holiday Party" />
				<option value="Learning" />
				<option value="Meeting" />
				<option value="Networking" />
				<option value="Seminar" />
				<option value="Special Event" />
			</datalist>		
			<label for="host">
				<span className="form-label">Hosted by</span>
				<span id="host-valid" style={{display: 'none'}}>Please enter the host</span>
				<input id="host" 
					type="text" 
					placeholder="John Smith" 
					autocomplete="name" 
					onBlur={props.onUpdateInput}
					onChange={props.onUpdateInput}					
					required></input>
			</label>
			<label for="location">
				<span className="form-label">Location</span>
				<span id="location-valid" style={{display: 'none'}}>Please enter event location</span>
				<input id="location" 
					type="text" 
					placeholder="1 Ocean Ave, Los Angeles, CA 90210" 
					autocomplete="street-address"
					onBlur={props.onUpdateInput}
					onChange={props.onUpdateInput}					 
					required></input>
			</label>
			<label for="start-time">
				<span className="form-label">Start Time</span>
				<span id="start-time-valid" style={{display: 'none'}}>Please enter a start time</span>
				<input id="start-time" 
					type="datetime-local"
					onBlur={props.onUpdateInput}
					onChange={props.onUpdateInput}					 
					required></input>
			</label>
			<label for="end-time">
				<span className="form-label">End Time</span>
				<input id="end-time" 
					type="datetime-local" 
					onBlur={props.onUpdateInput}
					onChange={props.onUpdateInput}></input>
			</label>

			<label for="guest-list">
				<span className="form-label">Guest List</span>
				<span id="guest-list-valid" style={{display: 'none'}}>Enter your guest's email (seperated by comma)</span>
				<textarea id="guest-list" 
					type="textarea"
					placeholder="partyguy1@hotmail.com, someotherguy@gmail.com"
					required
					onBlur={props.onUpdateInput}
					onChange={props.onUpdateInput}
					rows="1"></textarea>
			</label>

			<label for="more-info">
				<span className="form-label">Additional Info (Optional)</span>
				<textarea id="more-info" 
					type="textarea" 
					onBlur={props.onUpdateInput}
					onChange={props.onUpdateInput}					
					placeholder="Super fun party, yay, BYOB" 
					rows="1"></textarea>
			</label>									

			<button
  				id="submit-btn"
  				className="disabled"
  				disabled
              	type="submit">
                Continue
            </button>						
		</form>		
	)
};

module.exports = NewEventForm;