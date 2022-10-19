import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

/**
 * 获取cookie
 * @returns {cookies}
 */
export function getToken(){
    return Cookies.get(TokenKey)
    // return null
}

/**
 * 设置cookie
 * @param token token
 * @returns {*}
 */
export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

/**
 * 清除所有cookie
 * @returns {*}
 */
export function removeToken() {
    return Cookies.remove(TokenKey)
}
