const router = require('koa-router')();

router.get('/', async (ctx)=>{
    // ctx.body = '首页';
    await ctx.render('default/index');
})





module.exports = router.routes();