const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const auth = require('../../utils/auth');

// Get main blog page
router.get('/', async (req, res) => {
	try {
		const blogs = await Post.findAll(
			{
			include: [
				{
					model: User,
					attributes: ['user_name'],
				}
			]
		});
		const displayedBlogs = blogs.map((post) => post.get({ plain: true }));
		res.render('homepage', {
			displayedBlogs,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/blog/:id', auth, async (req, res) => {
	req.session.postId = req.params.id;
	try {
		const blogData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['user_name'],
				},
				{
					model: Comment,
					include: [{ model: User, attributes: ['user_name'] }],
				},
			],
		});
		const blog = blogData.get({ plain: true });
		res.render('blogPage', {
			blog,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.get('/login', async (req, res) => {	
	res.render('login');	
});

module.exports = router;
