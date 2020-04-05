const db = require('../db');

module.exports.get = async (ctx) => {
    const skills = db.getSkills() || [];
    const goods = db.getGoods() || [];
    await ctx.render('pages/index', { skills: skills, products: goods, msgsemail: ctx.flash('sendMail') })
}

module.exports.post = async (ctx) => {
    const { name, email, message } = ctx.request.body;
    const newMessage = { name, email, message };
    let messagesArr = db.getArray('messages');
    messagesArr.push(newMessage)
        .write();
    ctx.flash('sendMail', 'Message was sended');
    await ctx.redirect('/#form');
}