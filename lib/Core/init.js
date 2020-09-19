const { resolve } = require('../Utils/index')
// 入口文件路径(后期可以通过配置文件获取)
const entryPath = resolve('./src/')

// 根路径地址
console.log(entryPath,'hello' )


// 现在暂时挂载到全局对象上
global.entryPath = entryPath;



