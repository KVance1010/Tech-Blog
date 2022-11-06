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


module.exports = router;