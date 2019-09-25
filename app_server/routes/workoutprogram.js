var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/workoutProgramController');
let auth = require('connect-ensure-login');

router.get('/createworkoutprogram', auth.ensureLoggedIn('/login'), ctrl.createworkoutprogram);

router.get('/', ctrl.get);
router.post('/createworkoutprogram', auth.ensureLoggedIn('/login'),  ctrl.post);
router.get('/:workoutprogramid/addexercise', auth.ensureLoggedIn('/login'),  ctrl.addexerciseget);
router.post('/:workoutprogramid/addexercise', auth.ensureLoggedIn('/login'),  ctrl.addexercise);
router.get('/:workoutprogramid', auth.ensureLoggedIn('/login'),  ctrl.viewworkoutprogram);
module.exports = router;
