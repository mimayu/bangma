import axios from 'axios';
import qs from 'qs'

let baseURL = 'http://www.51bangma.com'; //项目域名地址\

if (process.env.NODE_ENV === 'development') {
    baseURL = ""
}

const api = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    withCredentials: true // 允许携带cookie
})

// 添加请求拦截器
api
    .interceptors
    .request
    .use(function (config) {
        if(config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
api
    .interceptors
    .response
    .use(function (response) {
        // 对响应数据做点什么
        return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default api;