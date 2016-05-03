var React = require('react');

function SignupForm(props) {
	// console.log(props)
	return(
		<form className="form-container">
			<label for="name">
				Name
				<input type="text" 
					placeholder="John Smith" 
					autocomplete="name" 
					autoFocus={focus}
					required>
				</input>
			</label>
			<label for="email">
				Email address
				<input id="email" 
					type="email" 
					placeholder="john.smith@gmail.com" 
					autocomplete="email" 
					required></input>
			</label>
			<label for="password">
				Password
				<input id="password" 
					type="password" 
					placeholder="Password1234" 
					autocomplete="new-password" 
					required
					onChange={props.onCheckPassword}
					value={props.password}></input>
			</label>
			<span id="character-length" style={{display: 'none'}}>Must be between 8 and 20 characters</span>
			<span id="password-number" style={{display: 'none'}}>Must contain a number</span>
			<label for="confirm-password">
				Confirm Password
				<input id="confirm-password" 
					type="password" 
					placeholder="Password1234" 
					autocomplete="new-password" 
					required
					disabled
					onChange={props.onConfirmPassword}
					value={props.confirmPassword}></input>
			</label>
			<span id="password-match" style={{display: 'none'}}>Passwords must match</span>
			<button
  				id="submit-btn"
  				disabled
              	type="submit">
                Continue
            </button>						
		</form>
	)
}


module.exports = SignupForm;