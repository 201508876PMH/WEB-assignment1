var express = require('express');
var router = express.Router();
const controllerLocations = require('../controllers/main');

console.log(controllerLocations);

/* Locations pages */
router.get('/', controllerLocations.index.get);

router.get('/createAccount', controllerLocations.createAccount.get);
router.post('/createAccount', controllerLocations.createAccount.post);

router.get('/login', controllerLocations.login.get);
router.post('/login', controllerLocations.login.post);
module.exports = router;
