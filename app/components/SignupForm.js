var React = require('react');

function SignupForm(props) {
	// console.log(props)
	return(
		<form onSubmit={props.onSubmit} className="form">
			<div id="req-info" className="active">
				<label for="name">
					<span className="form-label">Name</span>
					<span id="name-valid" style={{display: 'none'}}>Please enter your name</span>
					<input id="name"
						className="required"
						type="text" 
						placeholder="John Smith" 
						autocomplete="name" 
						autoFocus={focus}
						onBlur={props.onUpdateInput}
						onChange={props.onUpdateInput}
						required>
					</input>
				</label>
				<label for="email">
					<span className="form-label">Email address</span>
					<span id="email-valid" style={{display: 'none'}}>Please enter a valid email</span>
					<input id="email"
						className="required" 
						type="email" 
						placeholder="john.smith@gmail.com" 
						autocomplete="email"
						onBlur={props.onUpdateInput}
						onChange={props.onUpdateInput} 
						required>
					</input>
				</label>
				<label for="password">
					<span className="form-label">Password</span>
					<span id="character-length" style={{display: 'none'}}>Must be between 8 and 20 characters</span>
					<span id="password-number" style={{display: 'none'}}>Must contain a number</span>				
					<input id="password"
						className="required"
						type="password" 
						placeholder="Password1234" 
						autocomplete="new-password" 
						required
						onBlur={props.onUpdateInput}
						onChange={props.onUpdateInput}>
					</input>
				</label>
				<label for="confirmPassword">
					<span className="form-label" id="confirmPassword-label" style={{color: 'rgba(0,0,0,.33'}}>Confirm Password</span>
					<span id="password-match" style={{display: 'none'}}>Passwords not matching</span>
					<input id="confirmPassword" 
						className="required"
						type="password" 
						placeholder="Password1234" 
						autocomplete="new-password" 
						required
						disabled
						onBlur={props.onUpdateInput}
						onChange={props.onUpdateInput}
						style={{cursor: 'not-allowed'}}>
					</input>
				</label>
			</div>

			<h3 onClick={props.onMoreInfo}>Optional Info ></h3>

			<div id="additional-info" className="hidden">
				<label for="birthday">
					<span className="form-label">Birth Date</span>
					<input id="birthday"
						type="date"
						onBlur={props.onUpdateInput}
						onChange={props.onUpdateInput}>
					</input>
				</label>
				<label for="occupation">
					<span className="form-label">Occupation</span>
					<input id="occupation"
						placeholder="Petting Zoo DJ"
						type="text"
						onBlur={props.onUpdateInput}
						onChange={props.onUpdateInput}>
					</input>
				</label>					
				<label for="employer">
					<span className="form-label">Employer</span>
					<input id="employer"
						placeholder="Mikey's Grove"
						type="text"
						onBlur={props.onUpdateInput}
						onChange={props.onUpdateInput}>
					</input>
				</label>
				<label for="location">
					<span className="form-label">Location</span>
					<input id="location" 
						type="text" 
						placeholder="1 Ocean Ave, Los Angeles, CA 90210" 
						autocomplete="street-address"
						onBlur={props.onUpdateInput} 
						onChange={props.onUpdateInput}>
					</input>
				</label>																
			</div>			
			<button
  				id="submit-btn"
  				className="disabled"
  				disabled
              	type="submit">
                Sign up
            </button>						
		</form>
	)
}


module.exports = SignupForm;