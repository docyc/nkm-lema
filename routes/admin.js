const router = require('koa-router')({prefix: '/admin'});

router.get('/', async (ctx)=>{
    // ctx.body = '首页';
    await ctx.render('admin/index');
})

router.get('/user', async (ctx)=>{
    ctx.body = '用户管理';
    // await ctx.render('admin/index');
})



module.exports = router.routes();