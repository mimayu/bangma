import api from '../axios';

const getCustomer = (params) => {
    return (
        api.get('/api/customer/', {
            params
        })
    )
}

export {
    getCustomer
}