import firebaseConfig from "./firebaseConfig.js";
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";


//INITIALIZE FIREBASE
initializeApp(firebaseConfig);

//INITIALIZE AUTH SERVICE
const authService = getAuth();




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
	validateRegisterForm(
		registerFirstname.value, 
		registerLastname.value, 
		registerEmail.value, 
		registerPassword.value, 
		registerError)
});

//HANDLE SIGN UP ACTION
function registerUser(){
	const {registerErrorStatus} = validateRegisterForm(
		registerFirstname.value.trim(), 
		registerLastname.value.trim(), 
		registerEmail.value.trim(), 
		registerPassword.value.trim(), 
		registerError
	);
	if(registerErrorStatus()){
		return
	}else{
		const newUser = {
			firstname: registerFirstname.value.trim(),
			lastname: registerLastname.value.trim(),
			registerEmail:registerEmail.value.trim(),
			registerPassword:registerPassword.value.trim(),
		}
		createUserWithEmailAndPassword(authService, newUser.registerEmail, newUser.registerPassword)
		.then(()=>{
			registerForm.reset();
			window.location.href = "index.html";
		})
	}
};

registerButton.addEventListener("click", (e)=>{
	e.preventDefault();
	registerUser();
})