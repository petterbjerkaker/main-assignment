import firebaseConfig from "./firebaseConfig.js";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

//INITIALIZE FIREBASE
initializeApp(firebaseConfig);

//INITIALIZE AUTH SERVICE
const authService = getAuth();

//SELECTING THE LOG-IN FORM ELEMENTS
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const logInButton = document.querySelector(".log-in_button");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const logInForm = document.querySelector(".log-in_form");
const logInError = document.querySelector(".log-in_error");


//LOG IN BUTTON VALIDATION
logInButton.addEventListener("click", (e)=>{
	e.preventDefault();
	validateLogInForm(
		emailInput.value,
		passwordInput.value,
		emailError,
		passwordError
	);
});

//VALIDATION FOR LOG IN FORM FUNCTION
const validateLogInForm = (email, password, emailErrorElement, passErrorElement)=>{
	const errors = {
		errorStatus: false,
		emailErrorElement: "",
		passwordError: "",
	};

	if(!email && !password){
		errors.errorStatus = true,
		errors.emailErrorElement = "Email is required!",
		errors.passwordError = "Password is required!";

		emailErrorElement.style.visibility = "visible";
		passErrorElement.style.visibility = "visible";


		emailErrorElement.textContent = errors.emailErrorElement;
		passErrorElement.textContent = errors.passwordError;

	}else if(!email){
		errors.errorStatus = true,
		errors.emailErrorElement = "Email is required!",
		errors.passwordError = "";

		emailErrorElement.style.visibility = "visible";
		passErrorElement.style.visibility = "hidden";


		emailErrorElement.textContent = errors.emailErrorElement;
		passErrorElement.textContent = errors.passwordError;

	}else if(!password){
		errors.errorStatus = true,
		errors.emailErrorElement = "",
		errors.passwordError = "Password is required!";

		emailErrorElement.style.visibility = "hidden";
		passErrorElement.style.visibility = "visible";


		emailErrorElement.textContent = errors.emailErrorElement;
		passErrorElement.textContent = errors.passwordError;

	}else{
		errors.errorStatus = false,
		errors.emailErrorElement = "",
		errors.passwordError = "";

		emailErrorElement.style.visibility = "hidden";
		passErrorElement.style.visibility = "hidden";


		emailErrorElement.textContent = errors.emailErrorElement;
		passErrorElement.textContent = errors.passwordError;
	}

	const logInFormStatus = ()=>{
		return errors.errorStatus
	}

	return { logInFormStatus }
};




//HANDLE SIGN IN ACTION
function signInUser(){
	const { logInFormStatus } = validateLogInForm(
		emailInput.value,
		passwordInput.value,
		emailError,
		passwordError
	);
	if(logInFormStatus()){
		return
	}else{
		const email = emailInput.value.trim();
		const password = passwordInput.value.trim();
		signInWithEmailAndPassword(authService, email, password)
		.then(()=>{
			logInForm.reset(); 
			window.location.href = "app.html";
		})
		.catch(error =>{
			if(error.code === "auth/user-not-found" || "auth/wrong-password"){
				passwordError.textContent = "Invalid email or password.";
				passwordError.style.visibility = "visible";
			}else{
				console.error("Error signing in:", error);
			}
		})
	};
};

logInButton.addEventListener("click", (e)=>{
	e.preventDefault();
	signInUser();
});
