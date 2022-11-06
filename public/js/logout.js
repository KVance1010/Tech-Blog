// QuerySelectors
const logout = document.querySelector('#logout')

const logoutHandler = async () => {
	const response = await fetch('/api/users/logout', {
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	});
  
	if (response.ok) {
	  document.location.replace('/');
	} else {
	  alert('Failed to log out.');
	}
  };
  
  //event Listener
  logout.addEventListener('click', logoutHandler);
  