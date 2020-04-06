const express = require('express')
const router = express.Router()

const ctrlHome = require('../controllers/main')
const ctrlLogin = require('../controllers/login')
const ctrlAdmin = require('../controllers/admin')
const ctrlSkill = require('../controllers/skills')
const ctrlGoods = require('../controllers/goods')

router.get('/', ctrlHome.get)
router.post('/', ctrlHome.post)

router.get('/login', ctrlLogin.get)
router.post('/login', ctrlLogin.post)

router.get('/admin', ctrlAdmin.get)

router.post('/admin/skills', ctrlSkill.post)
router.post('/admin/upload', ctrlGoods.post)

module.exports = router