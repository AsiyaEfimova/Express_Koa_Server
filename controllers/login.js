const db = require('../db');

const random = () => Math.floor(Math.random() * 100000000)

module.exports.get = function (req, res) {
    res.render('pages/login', { msgslogin: req.flash('loginSave') });
}

module.exports.post = function (req, res) {
    console.log(req.body)
    const { email, password } = req.body;
    const newUser = {
        id: random(),
        email,
        password
    };
    let usersArr = db.getArray('users');
    usersArr.push(newUser)
        .write();
    req.flash('loginSave', 'Login was saved');
    res.redirect('/login');
}