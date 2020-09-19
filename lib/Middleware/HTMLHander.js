/* 读取Html文件 */
const fs = require('fs')

const HTMLHandler = async ( ctx,next ) => {
        const { request:{ url, query }} = ctx
        const { entryPath } = global
        if(url === '/'){
            const HtmlPath = `${entryPath}/index.html`
            let content = fs.readFileSync(HtmlPath,'utf-8')

            content = content.replace('<script',`
            <script>
                window.process = {
                    env:{NODE_EV:'dev'}
                }
            </script>
            <script
            `)
            ctx.type = 'text/html'
            ctx.body = content;
        }
        next()
    }

module.exports = HTMLHandler;