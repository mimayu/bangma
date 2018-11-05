<template>
  <div class="homepage">
    <router-link to="allUser" class="alink">
      <img class="all_user" src="../assets/img/qqq.jpg">
      全部客户
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../assets/img/qqq.jpg">
      机检
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../assets/img/qqq.jpg">
      开工实施
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../assets/img/qqq.jpg">
      签约等待
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../assets/img/qqq.jpg">
      签约成功
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../assets/img/qqq.jpg">
      签约失败
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      // msg: '我是hello word'
    }
  }
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
