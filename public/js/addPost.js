const addPost = document.querySelector('#addPost');
const showPostField = document.querySelector('#togglePost');
const submitPost = document.querySelector('#submitPost');

const addPostForm = () => {
	if (showPostField.getAttribute('style') === 'display:none') {
		showPostField.setAttribute('style', 'display:visible');
	} else {
		showPostField.setAttribute('style', 'display:none');
	}
};

const postFormHandler = async (event) => {
	event.preventDefault();
	const blogPost = document.querySelector('#blogPost').value.trim();
	const blogTitle = document.querySelector('#blogTitle').value.trim();

	if (blogPost && blogTitle) {
		const response = await fetch('/api/blog/', {
			method: 'POST',
			body: JSON.stringify({ blogPost, blogTitle }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.ok) {
			addPostForm();
			document.location.replace('/dashboard');
		} else {
			alert('Failed to create comment.');
		}
	}
};

submitPost.addEventListener('click', postFormHandler);
addPost.addEventListener('click', addPostForm);
