const router = require('express').Router();

const blogRoutes = require('./blog');
// const dashboardRoutes = require('./dashboard');

// router.use('/dashboard', dashboardRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
