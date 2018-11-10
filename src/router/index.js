import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import allUser from '@/components/allUser'
import detection from '@/components/detection'

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


    ]
})