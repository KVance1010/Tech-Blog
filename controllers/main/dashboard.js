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

module.exports = router;
