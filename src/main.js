// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Qs from 'qs'
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式
import '@/assets/css/base.css' /*引入公共样式*/
// Vue.config.productionTip = false
Vue.use(iView) //使用iview组件
Vue.prototype.$axios = axios

// Vue.prototype.qs = Qs;
// Vue.use(axios) //使用iview组件
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})