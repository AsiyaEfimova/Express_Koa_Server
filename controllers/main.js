const db = require('../db');

module.exports.get = function (req, res) {
    res.render('pages/index', { msgsemail: req.flash('sendMail') });
}

module.exports.post = function (req, res) {
    console.log(req.body)
    const newMessage = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    };
    db.get('messages')
        .push(newMessage)
        .write();
    req.flash('sendMail', 'Message was sended');
    res.redirect('/');
}