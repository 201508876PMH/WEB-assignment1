const bcrypt = require('bcrypt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var UserModel = require('../models/user');
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'inputEmail',
    passwordField: 'inputPassword'
},
    function (username, password, done) {
        User.findOne({ emailAddress: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) 
            {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }

            bcrypt.compare(password, user.password).then(function (result) {
                if (result) {
                    console.log('Correct password!');
                    //res.redirect('/');

                    return done(null, user);
                }
                else {
                    console.log('Login error: Incorrect password');
                    //res.redirect('/login');

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
            })

            //return done(null, user);
        });
    })

);

/* passport.use(new LocalStrategy({
    usernameField: 'inputEmail',
    passwordField: 'inputPassword'
},
    function (username, password, done) {
        User.findOne({ emailAddress: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }

            if (user) {
                bcrypt.compare(password, user.password).then(function (result) {
                    if (result) {
                        console.log('Correct password!');
                        //res.redirect('/');

                        return done(null, user);
                    }
                    else {
                        console.log('Login error: Incorrect password');
                        //res.redirect('/login');

                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
                    }
                })
            }

            return done(null, false, {message: 'User not found.'});
        });
    })
); */

passport.serializeUser(function (user, cb) {
    console.log("Ser: " + user)
    cb(null, user._id);
});

passport.deserializeUser(function (id, cb) {
    console.log("Des1" + id);
    User.findById(id, function (err, user) {
        console.log("Des2" + user);
        if (err) { return cb(err); }
        cb(null, user);
    });
});