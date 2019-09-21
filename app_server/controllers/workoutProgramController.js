var WorkoutModel = require('../models/workoutprogram');

module.exports.get = function (req, res) {
    var error = req.query.err
    res.render('workoutProgram', { title: 'Workout', err: error});
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

        console.log("A workout program with name: " + req.body.inputFirstName + " was succesfully created!");
        res.redirect('/');
        // saved!
    });
}