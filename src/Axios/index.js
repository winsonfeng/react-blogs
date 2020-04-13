import axios from 'axios'
import {message} from 'antd'

const isDev = process.env.NODE_ENV === 'development'

 const services = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/250568' : ''
})

//添加请求拦截器
services.interceptors.request.use((config)=>{
    config.data = Object.assign({},config.data,{
        // authToken :window.localStorage.getItem('authToken')
        authToken :'232435435dfsf'
    })
    return config
},(error)=>{
    return Promise.reject(error)
})

//添加响应拦截器
services.interceptors.response.use((resq)=>{
    if (resq.data.code === 200){
        message.success('数据请求成功')
        return resq.data
    }

},(error)=> {
    message.error('出错了')
    Promise.reject(error)
})

export const getArticle = (offset,limited) =>{
    return services.post('/api/v1/articleList',{
        //传参给后端
        offset:0,
        limited:10
    })
}

export default services
