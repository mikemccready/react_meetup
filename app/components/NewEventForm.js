var React = require('react');

function NewEventForm(props) {
	return(
		<form className="form">
			<label for="title">
				<span className="form-label">Event Name</span>
				<input type="text" 
					placeholder="Birthday Party"
					autoFocus={focus}
					required>
				</input>
			</label>
			<label for="host">
				<span className="form-label">Hosted by</span>
				<input id="host" 
					type="text" 
					placeholder="John Smith" 
					autocomplete="name" 
					required></input>
			</label>
			<label for="event-type">
				<span className="form-label">Type of event</span>
				<input id="event-type" list="events" name="myEvent" placeholder="Cocktail Hour" />
			</label>
			<datalist id="events">
				<option value="Birthday Party" />
				<option value="Wedding" />
				<option value="Cocktail Hour" />
				<option value="Meet-up" />
				<option value="Special Event" />
			</datalist>
			<label for="location">
				<span className="form-label">Location</span>
				<input id="location" 
					type="text" 
					placeholder="1 Ocean Ave, Los Angeles, CA 90210" 
					autocomplete="street-address" 
					required></input>
			</label>
			<label for="start-time">
				<span className="form-label">Start Time</span>
				<input id="start-time" type="datetime-local" required></input>
			</label>
			<label for="end-time">
				<span className="form-label">End Time</span>
				<input id="end-time" type="datetime-local" required></input>
			</label>

			<label for="guest-list">
				<span className="form-label">Guest List</span>
				<textarea id="guest-list" 
					type="textarea" 
					placeholder="JohnSmith@gmail.com, partyguy@hotmail.com, nextguest@stuff.com" 
					rows="4"
					required></textarea>
			</label>

			<label for="more-info">
				<span className="form-label">Additional Info</span>
				<textarea id="guest-list" 
					type="textarea" 
					placeholder="Super fun party, yay, BYOB" 
					rows="3"></textarea>
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