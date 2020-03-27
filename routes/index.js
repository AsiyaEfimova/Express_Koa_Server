const express = require('express')
const router = express.Router()

const ctrlHome = require('../controllers/main')
const ctrlAdmin = require('../controllers/admin')
const ctrlLogin = require('../controllers/login')

router.get('/', ctrlHome.get)
router.post('/', ctrlHome.post)

router.get('/login', ctrlLogin.get)
router.post('/login', ctrlLogin.post)

router.get('/admin', ctrlAdmin.get)
router.post('/admin/skills', ctrlAdmin.post)

module.exports = router