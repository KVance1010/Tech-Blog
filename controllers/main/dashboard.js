const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const auth = require('../../utils/auth');

router.get('/', auth, async (req, res) => {
	try {
		const userPosts = await User.findByPk(req.session.userId, { 
			include: [
				{
					model: Post
				},
                {
					model: Comment
				}
			]
		});    
		const userPost = userPosts.get({ plain: true });
		console.log(userPost);
		res.render('dashboard', {
			userPost,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/blog/:id', auth, async (req, res) => {
	try {
		const blogData = await Post.findByPk(req.params.id);
		const data = blogData.get({ plain: true });
		res.render('update', {
			data,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/comment/:id', auth, async (req, res) => {
	req.session.postId = req.params.id;
	try {
		const commentData = await Post.findByPk(req.params.id);
		const data = commentData .get({ plain: true });
		res.render('update', {
			data,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
