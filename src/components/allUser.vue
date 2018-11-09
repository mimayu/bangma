<template>
  <div class="allUser">
    <filtrate></filtrate>

    <!-- <h1>{{ msg }}</h1> -->
    <footerNav></footerNav>

  </div>
</template>

<script>
import footerNav from './modPage/footerNav' // 引入login.vue组件
import filtrate from './modPage/filtrate' // 引入login.vue组件

export default {
  name: 'allUser',
  data () {
    return {
      // msg: '我是hello word'
    }
  },
    components: {
    'filtrate': filtrate,
    'footerNav': footerNav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
