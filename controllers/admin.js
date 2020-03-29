const db = require('../db');

module.exports.get = function (req, res) {
    res.render('pages/admin', { msgskill: req.flash('skillSave'), msgfile: req.flash('goodSave') });
}