module.exports.get = function (req, res) {
    res.render('pages/index', { title: 'Main' });
}

//   module.exports.post = function (req, res) {
//     res.json({ title: 'Main' })
//   }