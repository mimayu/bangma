import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import allUser from '@/components/allUser'
import detection from '@/components/detection'
import priceDetail from '@/components/priceDetail'
import userinfo from '@/components/userinfo'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/allUser',
            name: 'allUser',
            component: allUser
        },
        {
            path: '/detection',
            name: 'detection',
            component: detection
        },
        {
            path: '/priceDetail',
            name: 'priceDetail',
            component: priceDetail
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: userinfo
        },

    ]
})