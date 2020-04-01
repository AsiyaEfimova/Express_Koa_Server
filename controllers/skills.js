const db = require('../db');

module.exports.post = async (ctx) => {
    const { age, concerts, cities, years } = ctx.request.body
    const newSkill = {
        age: age,
        concerts: concerts,
        cities: cities,
        years: years
    };
    db.get('skills')
        .push(newSkill)
        .write();
    ctx.body = {
        mes: 'Skills was saved',
        status: 'OK',
    }
    ctx.flash('skillSave', 'Skills was saved');
    await ctx.redirect('/admin/');
}