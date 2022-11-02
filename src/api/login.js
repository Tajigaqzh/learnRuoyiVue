import request from "@/utils/request";

// 登录方法
export function login(username,password,code,uuid) {
    const data = {
        username,
        password,
        code,
        uuid
    }
    return request({
        url:'/login',
        headers:{
            isToken:false
        },
        method:'post',
        data:data
    })
}
// 退出方法
export function logOut() {
    return request({
      url: '/logout',
      method: 'post'
    })
  }