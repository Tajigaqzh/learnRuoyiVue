import autoImport from 'unplugin-auto-import/vite'
export default function createAutoImport() {
    // 自动导入
    return autoImport({
        imports: [
            'vue',
            'vue-router',
            'pinia'
        ],
        dts: false,
        //// 生成在src路径下名为[name].ts的声明文件
    })
}
