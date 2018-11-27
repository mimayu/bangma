import api from '../axios';

const GetUser = (params) => {
    return (
        api.get('/ajax/my/tes', {
            account_uid: 2,
            iStatus: 1
        })
    )
}

export {
    GetUser
}