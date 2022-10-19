export default function htmlPlugin(viteEnv){
    const titleStr = "<title>"+viteEnv.VITE_APP_TITLE+"</title>"
    return{
        name:'html-transform',
        transformIndexHtml(html) {
            return html.replace(/<title>(.*?)<\/title>/,titleStr)
            // 替换项目标题
        }
    }
}
