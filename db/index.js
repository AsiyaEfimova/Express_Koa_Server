const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db/db.json')
const db = low(adapter);

const getSkills = () => db.getState().skills;
const getGoods = () => db.getState().goods;
const getArray = (param) => db.get(param);

module.exports = { db, getSkills, getGoods, getArray };