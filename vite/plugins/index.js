import vue from '@vitejs/plugin-vue'
import htmlPlugin from "./htmlPlugin";
import createAutoImport from "./autoImport";
import createSvgIcon from './svg-icon'

export default function createVitePlugins(viteEnv, isBuild = false) {
    const vitePlugins = [vue()]
    vitePlugins.push(htmlPlugin(viteEnv))
    vitePlugins.push(createAutoImport())
    vitePlugins.push(createSvgIcon(isBuild))
    return vitePlugins
}
