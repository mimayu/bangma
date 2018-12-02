import api from '../axios';

/**
 * 登录
 * @param {*} params 
 */
const postLogin = (params) => {
    return (
        api.post('/api/doLogin/', params)
    )
}

/**
 * 注册
 * @param {*} params 
 */
const postRegiste = (params) => {
    return (
        api.post('/api/registe/', params)
    )
}

export {
    postLogin,
    postRegiste
}