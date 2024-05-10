const registerFirstname = document.querySelector(".firstname");
const registerLastname = document.querySelector(".lastname");
const registerEmail = document.querySelector(".email");
const registerPassword = document.querySelector(".password");
const registerError = document.querySelector(".register-error");
const registerForm = document.querySelector(".register-form");
const registerButton = document.querySelector(".register-button");


//VALIDATE REGISTER FORM
const validateRegisterForm = (firstname, lastname, email, password, registerError)=>{
	let errorStatus = false;
	if(!firstname || !lastname || !email || !password ){
		errorStatus = true;
		registerError.style.visibility = "visible";
		registerError.textContent = "Please fill out all the fields!"
	}else{
		errorStatus = false;
		registerError.style.visibility = "hidden";
		registerError.textContent = "";
	}
	const registerErrorStatus = ()=>{
		return errorStatus;
	}
	return {registerErrorStatus}
	
};

//VALIDATION REGISTER BUTTON
registerButton.addEventListener("click", (e)=>{
	e.preventDefault();
	validateRegisterForm(registerFirstname.value, registerLastname.value, registerEmail.value, registerPassword.value, registerError)
});

