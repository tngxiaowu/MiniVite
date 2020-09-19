const replaceHtml = (fileUrl) =>  {
    return `import { render as __render } from "${fileUrl}?type=template"
            __script.render = __render
            export default __script
            `
}

module.exports = {
    replaceHtml
}