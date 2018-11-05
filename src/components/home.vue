<template>
  <div id="home">
    <homePage></homePage>
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from './footerNav' // 引入login.vue组件
import homePage from './homePage' // 引入login.vue组件
export default {
  name: 'home',
  components: {
    'footerNav': footerNav,
    'homePage': homePage,
  },
}
</script>

<style>

</style>
