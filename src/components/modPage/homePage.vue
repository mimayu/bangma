<template>
  <div class="homepage">
    <router-link to="allUser" class="alink">
      <img class="all_user" src="../../assets/img/qqq.jpg">
      全部客户
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../../assets/img/3.png">
      基检
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../../assets/img/4.png">
      开工实施
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../../assets/img/5.png">
      签约等待
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../../assets/img/6.png">
      签约成功
    </router-link>
    <router-link to="" class="alink">
      <img class="all_user" src="../../assets/img/7.png">
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
.alink{
  font-size: 14px;
}
.all_user{
  width:73px;
  height:73px;
  border-radius:50%;
  display:block;
  margin: 0 auto 10px auto;
}
</style>
