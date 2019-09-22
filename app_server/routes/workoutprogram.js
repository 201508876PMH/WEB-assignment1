var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/workoutProgramController');

router.get('/', ctrl.get);
router.get('/createworkoutprogram', ctrl.createworkoutprogram);
router.post('/createworkoutprogram', ctrl.post);
router.get('/:workoutprogramid/addexercise', ctrl.addexerciseget);
//router.post('/addexercise', ctrl.addexericse);
router.get('/:workoutprogramid', ctrl.viewworkoutprogram);
module.exports = router;
