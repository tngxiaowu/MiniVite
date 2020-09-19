/* 支持JS文件的导入 */
const fs = require('fs')
const { resolve , hanldeImport } = require('../Utils/index')

const JSHandler = async( ctx,next ) => {
        const { request:{ url, query }} = ctx
        const { entryPath } = global
        
        if(url.endsWith('.js')){
            const filePath = resolve( `${entryPath}/${url.slice(1)}`)
            // 如果不设置utf-8的话 那就会返回buffer 
            let content = fs.readFileSync(filePath,'utf-8')
            // 替换所有浏览器内所有浏览不支持的import方式
            content = hanldeImport(content)
            ctx.type = 'application/javascript'
            // console.log(content,'what is content' )
            ctx.body = content
        }
        next()
    }

module.exports = JSHandler;