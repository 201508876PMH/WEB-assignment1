var mongoose = require('mongoose');
var passport = require('passport');

module.exports.get = function (req, res) {
    res.render('login', { title: 'Express' });
};

module.exports.post = function (req, res) {
    res.redirect('/');       
    return;
    //res.render('createAccount', { title: 'Express' });
};
