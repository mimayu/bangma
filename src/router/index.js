import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import allUser from '@/components/allUser'
import detection from '@/components/detection'
import record from '@/components/record'
import priceDetail from '@/components/priceDetail'
import orderStatus from '@/components/orderStatus'
import roster from '@/components/roster'
import userinfo from '@/components/userinfo'
import quotationList from '@/components/quotationList'
import startWork from '@/components/startWork'
import signStatus from '@/components/signStatus'
import login from '@/components/login'
import register from '@/components/register'



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
            path: '/record',
            name: 'record',
            component: record
        },
        {
            path: '/priceDetail',
            name: 'priceDetail',
            component: priceDetail
        },
        {
            path: '/orderStatus',
            name: 'orderStatus',
            component: orderStatus
        },
        {
            path: '/roster',
            name: 'roster',
            component: roster
        },
        {
            path: '/userinfo',
            name: 'userinfo',
            component: userinfo
        },
        {
            path: '/quotationList',
            name: 'quotationList',
            component: quotationList
        },
        {
            path: '/startWork',
            name: 'startWork',
            component: startWork
        },
        {
            path: '/signStatus',
            name: 'signStatus',
            component: signStatus
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
    ]
})