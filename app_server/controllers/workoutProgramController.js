var mongoose = require('mongoose');
var WorkoutModel = require('../models/workoutprogram');

module.exports.get = function (req, res) {
    var error = req.query.err;
    WorkoutModel.find({}, function (err, items){
        res.render('workoutprograms', { title: 'Workout', workoutlist: items, err: error});
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
        if (err){
            res.redirect('/workoutprograms?err=' + err.message);
            return console.log(err.message) ;
        } 

        console.log("A workout program with name: " + req.body.name + " was succesfully created!");
        res.redirect('/workoutprograms');
        // saved!
    });
}

module.exports.createworkoutprogram = function(req, res) {
    var error = req.query.err;
    res.render('createworkoutprogram', { title: 'Create workoutprogram', err: error});
}

module.exports.addexerciseget = function(req, res) {
    var error = req.query.err;
    res.render('addexercise', { title: 'Add exercise to workout program', err: error});
}

module.exports.viewworkoutprogram = function(req,res) {
    console.log(req.params);
    var workoutprogramid = req.params.workoutprogramid;
    var error = req.query.err;
    res.render('viewworkoutprogram', {title: 'View workout program', exerciselist: [], workoutprogramid: workoutprogramid,  err: error});
}