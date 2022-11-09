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
const updateHandler = async (event) => {
    event.preventDefault();
    if(windowVal[windowVal.length -2] === 'blog'){
        const post = document.querySelector('#input').value.trim();
        const title = document.querySelector('#title').value.trim();
        const response = await fetch(
            `/api/blog/${windowVal[windowVal.length - 1]}`,
            {
                method: 'PUT', 
                body: JSON.stringify({ title, post }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to create blog.');
            }

    } else{
        const comment = document.querySelector('#input').value.trim();
        const response = await fetch(
        `/api/comment/${windowVal[windowVal.length - 1]}`,
        {
			method: 'PUT', 
			body: JSON.stringify({ comment }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create comment.');
		}
    }
};

updateData.addEventListener('click', updateHandler);
deleteData.addEventListener('click', deleteHandler);
