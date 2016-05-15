var React = require('react');

function SignupForm(props) {
	// console.log(props)
	return(
		<form onSubmit={props.onSubmit} className="form">
			<label for="name">
				Name
				<span id="name-valid" style={{display: 'none'}}>Please enter your name</span>
				<input id="name"
					type="text" 
					placeholder="John Smith" 
					autocomplete="name" 
					autoFocus={focus}
					onBlur={props.onBlur}
					required>
				</input>
			</label>
			<label for="email">
				Email address
				<span id="email-valid" style={{display: 'none'}}>Please enter your email</span>
				<input id="email" 
					type="email" 
					placeholder="john.smith@gmail.com" 
					autocomplete="email"
					onBlur={props.onBlur} 
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
					onBlur={props.onCheckPassword} 
					onChange={props.onCheckPassword}
					value={props.password}></input>
			</label>
			<label for="confirm-password">
				<span id="confirm-password-label" style={{color: 'rgba(0,0,0,.33'}}>Confirm Password</span>
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
  				className="disabled"
  				disabled
              	type="submit">
                Sign up
            </button>						
		</form>
	)
}


module.exports = SignupForm;