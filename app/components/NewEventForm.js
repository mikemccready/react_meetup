var React = require('react');

function NewEventForm(props) {
	return(
		<form className="form">
			<label for="title">
				Event Name
				<input type="text" 
					placeholder="Birthday Party"
					autoFocus={focus}
					required>
				</input>
			</label>
			<label for="host">
				Hosted by
				<input id="host" 
					type="text" 
					placeholder="John Smith" 
					autocomplete="name" 
					required></input>
			</label>
			<label for="event-type">
				Type of event
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
				Location
				<input id="location" 
					type="text" 
					placeholder="1 Ocean Ave, Los Angeles, CA 90210" 
					autocomplete="street-address" 
					required></input>
			</label>
			<label for="start-time">
				Start Time
				<input id="start-time" type="datetime-local" required></input>
			</label>
			<label for="end-time">
				End Time
				<input id="end-time" type="datetime-local" required></input>
			</label>

			<label for="guest-list">
				Guest List
				<textarea id="guest-list" 
					type="textarea" 
					placeholder="JohnSmith@gmail.com, partyguy@hotmail.com, nextguest@stuff.com" 
					rows="4"
					required></textarea>
			</label>

			<label for="more-info">
				Additional Info
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