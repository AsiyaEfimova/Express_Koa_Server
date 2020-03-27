const db = require('../db');

const random = () => Math.floor(Math.random() * 100000000)

module.exports.get = function (req, res) {
    res.render('pages/login', { msgslogin: req.flash('loginSave') });
}

module.exports.post = function (req, res) {
    console.log(req.body)
    const newUser = {
        id: random(),
        email: req.body.email,
        password: req.body.password
    };
    db.get('users')
        .push(newUser)
        .write();
    req.flash('loginSave', 'Login was saved');
    res.redirect('/login/');
}