const User = require('../models/user');

module.exports = function(req, res, next) {
  // Check if isn't logged in
  if (!req.user) return next();

  User.findOne({ _id: req.user }, (err, user) => {
    if (err) {
      console.log("Couldn't find user. Error:", err);
      next();
    }

    res.locals.currentUser = user;
    next();
  });
}