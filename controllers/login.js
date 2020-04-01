const db = require('../db');

const random = () => Math.floor(Math.random() * 100000000);

module.exports.get = async (ctx) => {
    await ctx.render('pages/login', { msglogin: ctx.flash('loginSave') });
}

module.exports.post = async (ctx) => {
    const { email, password } = ctx.request.body
    const newUser = {
        id: random(),
        email: email,
        password: password
    };
    db.get('users')
        .push(newUser)
        .write();
    ctx.body = {
        mes: 'Login was saved',
        status: 'OK',
    }
    ctx.flash('loginSave', 'Login was saved');
    await ctx.redirect('/login/');
}