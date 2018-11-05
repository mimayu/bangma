<template>
  <div class="allUser">
    <h1>{{ msg }}</h1>
    <footerNav></footerNav>

  </div>
</template>

<script>
import footerNav from './modPage/footerNav' // 引入login.vue组件

export default {
  name: 'allUser',
  data () {
    return {
      msg: '我是hello word'
    }
  },
    components: {
    'footerNav': footerNav,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
