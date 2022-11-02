/**
 * 参数处理
 * @param {*} params  参数
 */
export function transParams(params) {
    let result = ''
    for (const porpName of Object.keys(params)) {
        const value = params[porpName]
        var part = encodeURIComponent(porpName)+"="
        // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
        if (value !== null && value !== "" && typeof (value) !== "undefined") {
            if (typeof value ==='object') {
                // 如果value是对象
                for (const key of Object.keys(value)) {
                    if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
                        let params = propName + '[' + key + ']'
                        var subPart = encodeURIComponent(params) + "="
                        result += subPart + encodeURIComponent(value[key]) + "&";
                    }
                }
            }else{
                result+=part+encodeURIComponent(value)+'&'
            }
        }
    }
    return result
}