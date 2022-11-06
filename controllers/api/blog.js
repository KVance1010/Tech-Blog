const router = require('express').Router();
const { User, Post } = require('../models');

const auth = require('../utils/auth');

// GET one
router.get('/gallery/:id', withAuth, async (req, res) => {
	try {
		const dbGalleryData = await Gallery.findByPk(req.params.id, {
			include: [
				{
					model: Painting,
					attributes: [
						'id',
						'title',
						'artist',
						'exhibition_date',
						'filename',
						'description',
					],
				},
			],
		});

		const gallery = dbGalleryData.get({ plain: true });
		res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
