<template>
 
  <div class="roster">
    新建  工长  员工  客户 都在这里 
</div>

</template>

<script>

export default {
  name: 'record',
  data () {
    return {
      // msg: '我是hello word'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .record{
    background-color: #f6f6f6;
  }
  .record h3{
    padding: 5px 10px;
    color: #757575;
  }
  .r-content{
    padding: 5px 10px;
    background-color: #fff;
    color: #A3A4A6;
    font-size: 16px;
  }
  .r-pic{
    border-top: solid 1px #C6C6C6;
    padding: 10px 0px 10px 10px;
    margin-top: 3px;
  }
  .record_icon{
    border: solid 1px #999;
    width: 75px; 
    height: 75px;
  }
</style>
