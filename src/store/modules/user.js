import { login} from '@/api/login'
import {defineStore} from "pinia";
import {getToken,setToken} from "@/utils/auth";


const useUserStore = defineStore(
    'user',
    {
        state:()=>({
            token:getToken(),
            name:'',
            avatar:'',
            roles:[],
            permissions:[]
        }),
        actions:{
            //登录
            login(userInfo){
                console.log(userInfo.username)
                const username = userInfo.username.trim()
                const password = userInfo.password
                const code = userInfo.code
                const uuid = userInfo.uuid
                return new Promise((resolve ,reject)=>{
                    login(username,password,code,uuid).then(res=>{
                        setToken(res.token)
                        this.token = res.token
                        resolve()
                    }).catch(error=>{
                        reject(error)
                    })
                })
            }
        }
    })
export default useUserStore
