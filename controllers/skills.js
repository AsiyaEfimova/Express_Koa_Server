const db = require('../db');

module.exports.post = function (req, res) {
    console.log(req.body)
    const newSkill = {
        age: req.body.age,
        concerts: req.body.concerts,
        cities: req.body.cities,
        years: req.body.years
    };
    db.get('skills')
        .push(newSkill)
        .write();
    req.flash('skillSave', 'Skills was saved');
    res.redirect('/admin');
}