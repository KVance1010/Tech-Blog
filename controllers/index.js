const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./main/home.js');
const login = require('./main/login.js');
const blogRoutes = require('./blog/blog');
const dashboardRoutes = require('./dashboard/dashboard');

// router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/blog', blogRoutes)
router.use('/', homeRoutes);
router.use('/user', login);

module.exports = router;
