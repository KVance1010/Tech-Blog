const comment = document.querySelector('#addComment');
const showCommentField = document.querySelector('#toggleComment');
const submitComment = document.querySelector('#submitComment');

const addComment = () => {
	console.log(toggleComment.getAttribute('style'));
	if (toggleComment.getAttribute('style') === 'display:none') {
		toggleComment.setAttribute('style', 'display:visible');
	} else {
		toggleComment.setAttribute('style', 'display:none');
	}
};

const commentFormHandler = async (event) => {
    event.preventDefault();
	const commentText = document.querySelector('#commentText').value.trim();
	
    console.log('made it to submitComment handles');
	if (commentText) {
		const response = await fetch('/api/comment/', {
			method: 'POST',
			body: JSON.stringify({ commentText }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.ok) {
			addComment();
			document.location.replace('/');
		} else {
			alert('Failed to create comment.');
		}
	}
};

submitComment.addEventListener('click', commentFormHandler);
comment.addEventListener('click', addComment);
