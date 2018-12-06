import api from '../axios';

const getCustomer = (params) => {
    return (
        api.get('/api/customer/', {
            params
        })
    )
}

/**
 * 报价基础信息
 */
const getQutoe = (params) => {
    return (
        api.get('/api/baojia/', {
            params
        })
    )
}

export {
    getCustomer,
    getQutoe
}