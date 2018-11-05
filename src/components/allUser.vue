<template>
  <div class="oo">
    {{msg}}
    <!--页脚导航-->
    <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from './footerNav' // 引入login.vue组件

export default {
  name: 'oo',
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
.homepage{
  padding: 15px;display: flex;
   flex-wrap: wrap ;

}
a{
  width:33%;text-align: center; margin-bottom:10%;
}
.all_user{
  width:96px;
  height:96px;
  border-radius:50%;
  display:block;
  margin: 0 auto;
}
</style>
