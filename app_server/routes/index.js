var express = require('express');
var router = express.Router();
const controllerLocations = require('../controllers/main');

console.log(controllerLocations);

/* Locations pages */
router.get('/', controllerLocations.index);
router.get('/createAccount', controllerLocations.createAccount.get);
router.post('/createAccount', controllerLocations.createAccount.post);
module.exports = router;
