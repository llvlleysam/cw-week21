import axios from "axios";
import { baseURL, loginURL } from "../Constant/BaseUrl";

import { refreshToken } from "../Redux/Courses.slice/Courses.slice";
import { store } from "../Redux/Store/Store";



const httpService = axios.create({
    baseURL
})

httpService.interceptors.request.use((req)=>{
    if(req.url !== loginURL){
        const token = localStorage.getItem("access")
        req.headers.Authorization =`Bearer ${token}`
    }
    return req
},
(error)=>{
    return  Promise.reject(error)
})

httpService.interceptors.response.use((response)=>response, async(error)=>{
    if(error.response.status != 401){
        return Promise.reject(error)
    }
    const originRequest = error.config
    const refreshT = localStorage.getItem("refresh")
    if(error.response.status == 401 && originRequest){
        try{
            console.log("call")
            await store.dispatch(refreshToken(refreshT))
                const response = await httpService.request(originRequest)
                
                return Promise.resolve(response)
        } catch (e){
            localStorage.removeItem("access")
        }
    }
    return Promise.reject(error)

})

export default httpService