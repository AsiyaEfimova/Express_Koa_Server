const Router = require('@koa/router');
const router = new Router();
const koaBody = require('koa-body');
const config = require('../config');

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
router.post('/admin/upload', koaBody({
    formidable: {
        uploadDir: config.upload,
        keepExtensions: true,
        multiples: true,
    },
    multipart: true,
    urlencoded: true,
    formLimit: '5mb',
}), ctrlGoods.post)

module.exports = router