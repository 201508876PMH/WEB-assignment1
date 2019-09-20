var UserModel = require('../models/user');

module.exports.get = function (req, res) {
    var error = req.query.err
    res.render('createAccount', { title: 'Express', err: error});
};

module.exports.post = function (req, res) {
    console.log(req.body);

    // Create an instance of model MyModel
    var newUser = new UserModel({
        firstName: req.body.inputFirstName,
        lastName: req.body.inputLastName,
        password: req.body.inputPassword,
        emailAddress: req.body.inputEmail,
        zipCode: req.body.inputZipcode
    });

    // Save the new model instance, passing a callback
    newUser.save(function (err) {
        if (err){
            res.redirect('/createAccount?err=' + err.message);
            return console.log(err.message) ;
        } 

        console.log("A user with first name:" + req.body.inputFirstName + "was succesfully created!");
        res.redirect('/');
        // saved!
    });


}


