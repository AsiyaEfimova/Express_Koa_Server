const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const session = require('koa-session');
const Pug = require('koa-pug');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./libs/error');
const config = require('./config');
var flash = require('koa-connect-flash');
const koaBody = require('koa-body');

new Pug({
    viewPath: path.resolve(__dirname, './source/template'),
    pretty: false,
    basedir: './template',
    noCache: true,
    app: app,
});

const router = require('./routes');
app
    .use(static('./public'))
    .use(koaBody())
    .use(session(config.session, app))
    .use(flash())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(errorHandler)

const port = config.port || 3000
app.listen(port, () => {
    if (!fs.existsSync(config.upload)) {
        fs.mkdirSync(config.upload);
    }
    console.log('Server start on port: ', port);
})