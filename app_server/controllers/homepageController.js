module.exports.get = function (req, res) {
    console.log('user:', req.user);

    res.redirect('/login');
    //res.render('index', { title: 'Express', user: req.user });
};