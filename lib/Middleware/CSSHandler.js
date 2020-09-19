const CSSHandler = async (ctx,next ) => {
    const { request:{ url, query }} = ctx
    console.log(url,'what is url')
    ctx.body = 'CSSHander'
    next()
}

module.exports = CSSHandler