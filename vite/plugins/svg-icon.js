import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
// 引入svg图片插件
export default function createSvgIcon(isBuild) {
    return createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
        symbolId: 'icon-[dir]-[name]',
        svgoOptions: isBuild
    })
}