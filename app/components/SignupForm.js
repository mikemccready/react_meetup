var React = require('react');

function SignupForm(props) {
	console.log(props)
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
		</form>
	)
}


module.exports = SignupForm;