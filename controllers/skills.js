const db = require('../db');

module.exports.post = async (ctx) => {
    const { age, concerts, cities, years } = ctx.request.body
    const newSkill = { age, concerts, cities, years };
    db.get('skills')
        .push(newSkill)
        .write();
    ctx.flash('skillSave', 'Skills was saved');
    await ctx.redirect('/admin');
}