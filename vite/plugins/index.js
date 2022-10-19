import vue from '@vitejs/plugin-vue'
import htmlPlugin from "./htmlPlugin";
import createAutoImport from "./autoImport";

export default function createVitePlugins(viteEnv){
    const vitePlugins = [vue()]
    vitePlugins.push(htmlPlugin(viteEnv))
    vitePlugins.push(createAutoImport())
    return vitePlugins
}
