// 本质上是使用koa劫持浏览器请求
const Koa = require('koa')
const app = new Koa()

// 引入中间件
const HTMLHandler = require('./Middleware/HTMLHander')
const JSHandler = require('./Middleware/jsHandler')
const VUEHandler = require('./Middleware/vueHandler')
const ModuleHandler = require('./Middleware/ModuleHandler')

// 初始化参数 配置
require('./Core/init')

// 注册中间件
app.use(HTMLHandler)
app.use(JSHandler)
app.use(ModuleHandler)
app.use(VUEHandler)

app.listen(4202,()=>{
    console.log('run success')
})