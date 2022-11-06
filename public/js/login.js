const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#userName').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (userName && password) {
    const response = await fetch('/user/login', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#userName').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (userName && password) {
    const response = await fetch('/user/signup', {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};


