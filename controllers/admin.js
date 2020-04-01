const db = require('../db');

module.exports.get = async (ctx) => {
    await ctx.render('pages/admin', { msgskill: ctx.flash('skillSave'), msgfile: ctx.flash('goodSave') });
}