<template>
  <div class="homepage">
    <router-link to="" class="alink">全部客户</router-link>
    <router-link to="" class="alink">机检</router-link>
    <router-link to="" class="alink">开工实施</router-link>
    <router-link to="" class="alink">签约等待</router-link>
    <router-link to="" class="alink">签约成功</router-link>
    <router-link to="" class="alink">签约失败</router-link>

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
  width:33%;text-align: center;
}
</style>
