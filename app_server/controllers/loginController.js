var mongoose = require('mongoose');
var passport = require('passport');

module.exports.get = function (req, res) {
    res.render('login', { title: 'Express', user: req.user });
};

module.exports.post = function (req, res) {
<<<<<<< Updated upstream
    res.redirect('/workoutprograms');       
    return;
=======
    return res.redirect('/');
    //res.render('createAccount', { title: 'Express' });
>>>>>>> Stashed changes
};

module.exports.logout = function (req, res) {
    req.logout();
    res.redirect('/login');
};