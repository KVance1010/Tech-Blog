//QuerySelectors
const deleteData = document.querySelector('#delete');
const updateData = document.querySelector('#update');
const windowVal = window.location.href.split('/');

// This function handles the logging in
const deleteHandler = async () => {
	if (windowVal[windowVal.length - 2] === 'blog') {
		const response = await fetch(
			`/api/blog/${windowVal[windowVal.length - 1]}`,
			{
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
			}
		);
		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create comment.');
		}
	} else {
		const response = await fetch(
			`/api/comment/${windowVal[windowVal.length - 1]}`,
			{
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
			}
		);
		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create comment.');
		}
	}
};

// This function handles the Signing up
const updateHandler = async () => {
    if(windowVal[windowVal.length -2] === 'blog'){






    }else{







    }
};

updateData.addEventListener('click', updateHandler);
deleteData.addEventListener('click', deleteHandler);
