var mongoose = require('mongoose');
var WorkoutModel = require('../models/workoutprogram');
var exerciseSchema = require('../models/exercise');

module.exports.get = function (req, res) {
    var error = req.query.err;
    WorkoutModel.find({}, function (err, items) {
        res.render('workoutprograms', { title: 'Workout', workoutlist: items, err: error, user: req.user });
    });
};

module.exports.post = function (req, res) {
    console.log(req.body);

    // Create an instance of model MyModel
    var newWorkoutProgram = new WorkoutModel({
        name: req.body.name
    });

    // Save the new model instance, passing a callback
    newWorkoutProgram.save(function (err) {
        if (err) {
            res.redirect('/workoutprograms?err=' + err.message);
            return console.log(err.message);
        }

        console.log("A workout program with name: " + req.body.name + " was succesfully created!");
        res.redirect('/workoutprograms');
        // saved!
    });
}

module.exports.createworkoutprogram = function (req, res) {
    //var error = req.query.err;
    res.render('createworkoutprogram', { user: req.user, title: 'Dette er en placeholder for title'});
}

module.exports.addexerciseget = function (req, res) {
    var error = req.query.err;
    var workoutprogramid = req.params.workoutprogramid;
    WorkoutModel.findById(workoutprogramid, function (err, doc) {
        res.render('addexercise', { title: 'Add exercise to workout program', workoutprogram: doc, err: error, user: req.user });
    });

}

module.exports.viewworkoutprogram = function (req, res) {
    //console.log(req.params);
    var error = req.query.err;
    var workoutprogramid = req.params.workoutprogramid;
    WorkoutModel.findById(workoutprogramid, function (err, doc) {
        res.render('viewworkoutprogram', { title: 'View workout program', workoutprogram: doc, workoutprogramid: workoutprogramid, err: error, user: req.user });
    });
}

module.exports.addexercise = function (req, res) {
    console.log(req.body);

    var workoutprogramid = req.params.workoutprogramid;
    WorkoutModel.findById(workoutprogramid, function (err, doc) {
        var parent = doc;
        var exerciseModel = mongoose.model('exerciseModel', exerciseSchema);
        var exercise = new exerciseModel({
            exercise: req.body.exercise,
            description: req.body.description,
            set: req.body.set,
            reps_time: req.body.reps
        });
        parent.exercises.push(exercise);

        parent.save(function (err) {
            if (err) {
                console.log(err.message);
            }
            res.redirect('/workoutprograms/' + workoutprogramid);
        });
    });
}