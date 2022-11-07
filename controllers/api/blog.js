const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const auth = require('../../utils/auth');

router.get('/:id', auth, async (req, res) => {
	try {
		const blogData = await Post.findByPk(req.params.id, { 
			include: [
				{
					model: User,
					attributes: ['user_name'],
				},
				{
					model: Comment,
					include: [
					{ model: User, attributes: ['user_name'],}
					]
				}
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

module.exports = router;