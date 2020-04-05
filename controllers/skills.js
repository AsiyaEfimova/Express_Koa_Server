const db = require('../db');

module.exports.post = async (ctx) => {
    const { age, concerts, cities, years } = ctx.request.body;
    let skillsArr = db.getArray('skills');
    if (age && age !== '') {
        skillsArr.find({ name: "age" })
            .assign({ number: age })
            .write();
    }
    if (concerts && concerts !== '') {
        skillsArr.find({ name: "concerts" })
            .assign({ number: concerts })
            .write();
    }
    if (cities && cities !== '') {
        skillsArr.find({ name: "cities" })
            .assign({ number: cities })
            .write();
    }
    if (years && years !== '') {
        skillsArr.find({ name: "years" })
            .assign({ number: years })
            .write();
    }
    ctx.flash('skillSave', 'Skills was saved');
    await ctx.redirect('/admin');
}