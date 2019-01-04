const koa = require('koa'),
      router = require('koa-router')(),
      static = require('koa-static'),
      render = require('koa-art-template'),
      bodyparser = require('koa-bodyparser'),
      session = require('koa-session'),
      path = require('path');

const app = new koa();

/**被指中间件
 * koa-static
 * koa-art-template
 * koa-bodyparser
 * koa-session
 */
app.use(static(__dirname+'/public'));

render(app,{
    root: path.join(__dirname,'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

app.use(bodyparser());

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess', 
  maxAge: 86400000,
  autoCommit: true, 
  overwrite: true, 
  httpOnly: true, 
  signed: true, 
  rolling: true, 
  renew: false, 
};
app.use(session(CONFIG, app));


// 加载子路由
const index = require('./routes/index');
const admin = require('./routes/admin');

/** 配置路由 */
app.use(index);
app.use(admin);


app.listen(3000,()=>{
    console.log('server running for port 3000')
})
