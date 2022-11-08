const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./main/home.js');
const dashboardRoutes = require('./main/dashboard');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
