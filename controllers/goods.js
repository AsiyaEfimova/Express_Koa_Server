const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const db = require('../db');

const validation = (fields, files) => {
    if (files.photo.name === '' || files.photo.size === 0) {
        return { status: 'Не загружена картинка!', err: true }
    }
    if (!fields.name) {
        return { status: 'Не указано описание картинки!', err: true }
    }
    if (!fields.price) {
        return { status: 'Не указана цена!', err: true }
    }
    return { status: 'Ok', err: false }
}

module.exports.post = function (req, res) {
    let form = new formidable.IncomingForm();
    let upload = path.join('./public', 'upload');
    if (!fs.existsSync(upload)) {
        fs.mkdirSync(upload);
    }
    form.uploadDir = path.join(process.cwd(), upload);
    form.parse(req, function (err, fields, files) {
        if (err) {
            return next(err);
        }
        const valid = validation(fields, files);
        if (valid.err) {
            fs.unlinkSync(files.photo.path)
            req.flash('goodSave', `Error: ${valid.status}`);
            return res.redirect('/admin');
        }
        const fileName = path.join(upload, files.photo.name);
        fs.rename(files.photo.path, fileName, function (err) {
            if (err) {
                console.error(err.message)
                return
            }
            let startSign = fileName.indexOf('\/');
            if (!startSign) {
                startSign = fileName.indexOf('\\');
            }
            let dir = fileName.substr(startSign);
            const newGood = {
                src: dir,
                name: fields.name,
                price: fields.price
            };
            let goodsArr = db.getArray('goods');
            goodsArr.push(newGood)
                .write();
            req.flash('goodSave', 'Good was saved');
            res.redirect('/admin');
        });
    });
}