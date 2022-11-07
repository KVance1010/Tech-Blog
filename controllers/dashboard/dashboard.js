const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
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
        
        const userPost = userPosts.map((post) => post.get({ plain: true }));
		// const userPost = userPosts.get({ plain: true });
		res.render('dashboard', {
			userPost,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
