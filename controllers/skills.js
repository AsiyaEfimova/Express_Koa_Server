const db = require('../db');

module.exports.post = function (req, res) {
    console.log(req.body)
    const { age, concerts, cities, years } = req.body;
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
    req.flash('skillSave', 'Skills was saved');
    res.redirect('/admin');
}