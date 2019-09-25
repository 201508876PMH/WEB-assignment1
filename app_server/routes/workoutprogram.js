var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/workoutProgramController');
let auth = require('connect-ensure-login');

router.get('/createworkoutprogram', 
    auth.ensureLoggedIn('/login'), ctrl.createworkoutprogram);

router.get('/', ctrl.get);
//router.get('/createworkoutprogram', ctrl.createworkoutprogram);
router.post('/createworkoutprogram', ctrl.post);
router.get('/:workoutprogramid/addexercise', ctrl.addexerciseget);
router.post('/:workoutprogramid/addexercise', ctrl.addexercise);
router.get('/:workoutprogramid', ctrl.viewworkoutprogram);
module.exports = router;
