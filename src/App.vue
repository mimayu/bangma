<template>
  <div id="app">
    <!-- <router-view/> -->
    <homePage></homePage>
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from './components/footerNav' // 引入login.vue组件
import homePage from './components/homePage' // 引入login.vue组件
export default {
  name: 'App',
  components: {
    'footerNav': footerNav,
    'homePage': homePage,
  },
}
</script>

<style>

</style>
