import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footerNav from '@/components/footerNav'
import homePage from '@/components/homePage'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'footerNav',
            component: footerNav
        },
        {
            path: '/',
            name: 'homePage',
            component: homePage
        }
    ]
})