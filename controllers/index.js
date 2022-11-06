const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home.js');
// const signup = require('./signup.js');
const login = require('./login.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', login);
// router.use('/signup', signup);

module.exports = router;
