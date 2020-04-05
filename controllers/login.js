const db = require('../db');

const random = () => Math.floor(Math.random() * 100000000);

module.exports.get = async (ctx) => {
    await ctx.render('pages/login', { msglogin: ctx.flash('loginSave') });
}

module.exports.post = async (ctx) => {
    const { email, password } = ctx.request.body
    const newUser = {
        id: random(),
        email,
        password
    };
    let usersArr = db.getArray('users');
    usersArr.push(newUser)
        .write();
    ctx.flash('loginSave', 'Login was saved');
    await ctx.redirect('/login');
}