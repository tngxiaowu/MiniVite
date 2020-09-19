/* Module查找处理 */
const fs = require('fs')
const path = require('path')
const { resolve,hanldeImport,makeRightVueUrl } = require('../Utils/index')

const ModuleHandler = async( ctx,next ) => {
        const { request:{ url, query }} = ctx
        const { entryPath } = global
        if(url.startsWith('/@modules/')){
            // 本质思想就是在node_modules中查找路径
            let newUrl = url.replace('/@modules/','')
            const NODE_MODULE = path.resolve(entryPath,'../node_modules')
            const VUE = `${newUrl}/dist/${makeRightVueUrl(newUrl)}`
            const filePath = `${NODE_MODULE}/${VUE}`
            // console.log(url, isVue,filePath, 'url')
            // 如果不设置utf-8的话 那就会返回buffer 
            let content = fs.readFileSync(filePath,'utf-8')
            // console.log(content,'content')
            ctx.type = 'application/javascript'
            // 替换所有浏览器内所有浏览不支持的import方式
            ctx.body =  hanldeImport(content)
        }
        next()
    }

module.exports = ModuleHandler;