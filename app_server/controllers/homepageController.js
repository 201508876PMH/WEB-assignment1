
module.exports.get = function (req, res) {
    console.log('user:', req.user);

    res.render('index', { title: 'Express' });
};