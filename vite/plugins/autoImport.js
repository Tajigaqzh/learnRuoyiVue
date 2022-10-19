import autoImport from 'unplugin-auto-import/vite'
export default function createAutoImport() {
    return autoImport({
        imports: [
            'vue',
            'vue-router',
            'pinia'
        ],
        dts: false,
        //// 生成在src路径下名为[name].js的声明文件，也可以写成false
    })
}
