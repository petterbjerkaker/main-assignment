const validateLogInForm = (email, password, emailError, passError)=>{
	const errors = {
		errorStatus: false,
		emailError: "",
		passwordError: "",
	};

	if(!email && !password){
		errors.errorStatus = true,
		errors.emailError = "Email is required ⚠️",
		errors.passwordError = "Password is required ⚠️";

		emailError.style.visibility = "visible";
		passError.style.visibility = "visible";


		emailError.textContent = errors.emailError;
		passError.textContent = errors.passwordError;
	}
};