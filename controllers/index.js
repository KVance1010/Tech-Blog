const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./main/home.js');
const login = require('./main/login.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/user', login);

module.exports = router;
