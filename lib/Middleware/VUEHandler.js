/* 支持.vue单文件解析 */
const fs = require('fs')
const { hanldeImport } = require('../Utils/index')
const { replaceHtml } = require('../Utils/template')

const { parse } = require('@vue/compiler-sfc')
const { compile }  = require('@vue/compiler-dom')

const VUEHandler = async (ctx,next) =>  {
    // 实现思路 -> template拆分 
    const { request:{ url, query }} = ctx
    const { entryPath } = global
    // 命中url
    if(url.indexOf('.vue') > -1){
        // 找路径
        // 这里有一个坑点是 必须要使用?进行分割
        const filePath =   `${entryPath}${url.split('?')[0]}`
        // 解析(方式有两种 vue单模板渲染 或者 使用 readFileSync)
        const content = fs.readFileSync(filePath,'utf-8')
        const { descriptor } =  parse(content)
        // console.log(descriptor,'description')
        if(!query.type){
            ctx.type = 'application/javascript'
            // 有个坑点 
            // 如果说 单应用文件没有script 那就会报错 descriptor.script 直接为null
            ctx.body = `${hanldeImport( descriptor.script.content.replace('export default','const __script = '))}
            ${replaceHtml(url)}
            `
        }else if(query.type ==='template'){
            const template = descriptor.template;
            const render = compile( template.content,{ mode:'module'}).code
            // console.log( hanldeImport(render),'render' )
            ctx.type = 'application/javascript'
            ctx.body = hanldeImport(render)
        }
    }
    next()
}

module.exports = VUEHandler