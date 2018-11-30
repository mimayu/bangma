<template>
  <div id="home">
    <homePage></homePage>
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '../components/modPage/footerNav'
import homePage from '../components/modPage/homePage' // 引入login.vue组件
export default {
  name: 'home',
  components: {
    'footerNav': footerNav,
    'homePage': homePage,
  },
}
</script>

<style>
.a{color:#000;}
</style>
