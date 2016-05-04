var React = require('react');

function SignupForm(props) {
	// console.log(props)
	return(
		<form className="form">
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
				<span id="character-length" style={{display: 'none'}}>Must be between 8 and 20 characters</span>
				<span id="password-number" style={{display: 'none'}}>Must contain a number</span>				
				<input id="password" 
					type="password" 
					placeholder="Password1234" 
					autocomplete="new-password" 
					required
					onChange={props.onCheckPassword}
					value={props.password}></input>
			</label>
			<label for="confirm-password">
				<span id="confirm-password-label" style={{color: 'gray'}}>Confirm Password</span>
				<span id="password-match" style={{display: 'none'}}>Passwords not matching</span>
				<input id="confirm-password" 
					type="password" 
					placeholder="Password1234" 
					autocomplete="new-password" 
					required
					disabled
					onChange={props.onConfirmPassword}
					value={props.confirmPassword}
					style={{cursor: 'not-allowed'}}></input>
			</label>
			<button
  				id="submit-btn"
  				style={{cursor: 'not-allowed'}}
  				disabled
              	type="submit">
                Sign up!
            </button>						
		</form>
	)
}


module.exports = SignupForm;