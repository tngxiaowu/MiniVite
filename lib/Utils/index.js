const path = require('path')

const resolve = ( url ) => {
    return path.resolve(process.cwd(),url)
}

const hanldeImport = content => {
    return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0,s1){
        if(s1[0] !=='.'  && s1[1] !== '/' ){
            console.log(s1,'s1')
            return ` from '/@modules/${s1}'`
        }else{
            return s0
        }
    })
}

const urlEnmus = {
    'vue': 'vue.runtime.esm-bundler.js',
    "runtime-dom":"runtime-dom.esm-bundler.js",
    "runtime-core":"runtime-core.esm-bundler.js",
    "shared": "shared.esm-bundler.js",
    "reactivity":"reactivity.esm-bundler.js"
}

const makeRightVueUrl = url => {
    url = url.replace('@vue/','')
    // console.log(url,urlEnmus[url],'url2')
    return urlEnmus[url]
}

module.exports = {
    resolve,
    hanldeImport,
    makeRightVueUrl
}