var express = require('express');
var router = express.Router();
const controllerLocations = require('../controllers/main');
const passport = require('passport');

console.log(controllerLocations);

/* Locations pages */
router.get('/', controllerLocations.index.get);

router.get('/createAccount', controllerLocations.createAccount.get);
router.get('/userconfirmation', controllerLocations.createAccount.userconfirmation);
router.post('/createAccount', controllerLocations.createAccount.post);

router.get('/login', controllerLocations.login.get);
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), controllerLocations.login.post);
router.get('/logout', controllerLocations.login.logout);

module.exports = router;
