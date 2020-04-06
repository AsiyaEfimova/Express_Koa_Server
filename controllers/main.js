const db = require('../db');

module.exports.get = function (req, res) {
    const skills = db.getSkills() || [];
    const goods = db.getGoods() || [];
    res.render('pages/index', { skills: skills, products: goods, msgsemail: req.flash('sendMail') });
}

module.exports.post = function (req, res) {
    console.log(req.body)
    const { name, email, message } = req.body;
    const newMessage = { name, email, message };
    let messagesArr = db.getArray('messages');
    messagesArr.push(newMessage)
        .write();
    req.flash('sendMail', 'Message was sended');
    res.redirect('/#form');
}