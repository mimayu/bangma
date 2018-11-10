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
.allUser{
  background-color: #f6f6f6;
}
  .header_btn{
    height: 44px;
    line-height: 44px;
    background-color:#f6f6f6;
    padding: 0 10px;
  }
  .header_btn img{
    width: 14px;
    height: 7px;
  }
  .header_btn .search{
    float: right;
  }
  .header_btn .search img{
    width: 15px;
    height: 16px;
  }
  .order{
    background: #fff;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>
