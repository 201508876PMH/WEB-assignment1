var UserModel = require('../models/user');
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;


var User = mongoose.model('User');

module.exports.get = function (req, res) {
    res.render('login', { title: 'Express' });
};


module.exports.post = function (req, res) {
    console.log(req.body.inputEmail);
    console.log(req.body.inputPassword);

    // Create an instance of model MyModel
    var newUser = new UserModel({
        password: req.body.inputPassword,
        emailAddress: req.body.inputEmail,
    });

    User.findOne({
        'emailAddress': newUser.emailAddress
    }, 'emailAddress password', function (err, User) {
        console.log(User.emailAddress);
        console.log(User.password);
        
        bcrypt.compare(newUser.password, User.password).then(function (result){
            if(result){
                console.log('Correct password!');
                res.redirect('/');
            }else{
                console.log('Øv bøv');
                res.redirect('/login');
            }
        })
    });
}