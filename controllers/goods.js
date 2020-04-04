const fs = require('fs');
const path = require('path');
const db = require('../db');
const config = require('../config');

const validation = (fields, files) => {
    if (files.name === '' || files.size === 0) {
        return { status: 'Не загружена картинка!', err: true }
    }
    if (!fields.name) {
        return { status: 'Не указано название!', err: true }
    }
    if (!fields.price) {
        return { status: 'Не указана цена!', err: true }
    }
    return { status: 'Ok', err: false }
}

module.exports.post = async (ctx) => {
    const { name, price } = ctx.request.body;
    const { name: photoName, path: photoPath } = ctx.request.files.photo;
    const valid = validation(ctx.request.body, ctx.request.files.photo);
    if (valid.err) {
        fs.unlinkSync(photoPath)
        ctx.flash('goodSave', `Error: ${valid.status}`);
        return ctx.redirect('/admin');
    }
    const fileName = path.join(config.upload, photoName);
    fs.rename(photoPath, fileName, function (err) {
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
            photo: dir,
            name: name,
            price: price
        };
        db.get('goods')
            .push(newGood)
            .write();
        ctx.flash('goodSave', 'Good was saved');
        ctx.redirect('/admin');
    });
}