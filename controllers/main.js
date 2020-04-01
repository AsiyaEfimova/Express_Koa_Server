const db = require('../db');

module.exports.get = async (ctx) => {
    await ctx.render('pages/index', { msgsemail: ctx.flash('sendMail') })
}

module.exports.post = async (ctx) => {
    const { name, email, message } = ctx.request.body;
    const newMessage = {
        name: name,
        email: email,
        message: message
    };
    db.get('messages')
        .push(newMessage)
        .write();
    ctx.body = {
        mes: 'Message was saved',
        status: 'OK',
    }
    ctx.flash('sendMail', 'Message was sended');
    await ctx.redirect('/');
}