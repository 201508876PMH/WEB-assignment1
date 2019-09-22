var mongoose = require('mongoose');
var WorkoutModel = require('../models/workoutprogram');

module.exports.get = function (req, res) {
    var error = req.query.err
    WorkoutModel.find({}, function (err, items){
        /*items.forEach(function (item) {
            console.log(item);
        });*/

        res.render('workoutProgram', { title: 'Workout', workoutlist: items, err: error});
    });
    //res.render('workoutProgram', { title: 'Workout', err: error});
    

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
            res.redirect('/workoutProgram?err=' + err.message);
            return console.log(err.message) ;
        } 

        console.log("A workout program with name: " + req.body.name + " was succesfully created!");
        res.redirect('/workoutProgram');
        // saved!
    });
}

module.exports.createworkoutprogram = function(req, res) {
    var error = req.query.err
    res.render('createworkoutprogram', { title: 'Create workoutprogram', err: error});
}
