const signup = document.querySelector('#signUpLogin');
const loginHeader = document.querySelector('.login_title');
const loginForm = document.querySelector('#loginForm');
const submitButton = document.querySelector('#submitLogin');

const changeToSignUp = () => {
	if (signup.textContent === 'Sign up') {
		signup.textContent = 'Login';
		loginHeader.textContent = 'Sign up';
		// loginForm.setAttribute('action', '');
	} else {
		signup.textContent = 'Sign up';
		loginHeader.textContent = 'Login';
		// loginForm.setAttribute('action', '');
	}
};

const submitHandler = () => {
	if (signup.textContent === 'Sign up') {
		signupFormHandler();
	} else {
		loginFormHandler();
	}
};

signup.addEventListener('click', changeToSignUp);
submitButton.addEventListener('submit', submitHandler);
