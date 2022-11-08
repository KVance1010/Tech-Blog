// QuerySelectors
const signup = document.querySelector('#signUpLogin');
const loginHeader = document.querySelector('.login_title');
const loginForm = document.querySelector('#loginForm');
const submitButton = document.querySelector('#submitLogin');

// This function handles the logging in
const loginFormHandler = async () => {
  const user_name = document.querySelector('#userName').value.trim();
  const password = document.querySelector('#password').value.trim();

  console.log(user_name);
  console.log(password);
  if (user_name && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

// This function handles the Signing up
const signupFormHandler = async () => {
  const user_name = document.querySelector('#userName').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (user_name && password) {
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

// Changes the page from sign up to login page
const changeToSignUp = () => {
	if (signup.textContent === 'Sign up') {
		signup.textContent = 'Login';
		loginHeader.textContent = 'Sign up';
	} else {
		signup.textContent = 'Sign up';
		loginHeader.textContent = 'Login';
	}
};

// handles if the user is logging in or signing up
const submitHandler = (event) => {
	event.preventDefault();
	if (loginHeader.textContent === 'Sign up') {
		signupFormHandler();
	} else {
		loginFormHandler();
	}
};

// Event listeners
signup.addEventListener('click', changeToSignUp);
submitButton.addEventListener('click', submitHandler);
