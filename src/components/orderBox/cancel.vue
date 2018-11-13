<template>
   <ul>
      <li>
        <span class="m-title">订单状态</span>
        <span class="m-data">基检预约</span>
      </li>
      <li>
        <span class="m-title">上门时间</span>
        <a href="" class="m-data"><img class="m_icon" src="../assets/img/Shape2x.png"></a>
      </li>
      <li style="text-align: top;">
        <span class="m-title">取消原因</span>
        <input class="m-text" type="text">
      </li>
    </ul>
</template>

<script>
import footerNav from './modPage/footerNav' // 引入页脚

export default {
  name: 'allUser',
  data () {
    return {
      // msg: '我是hello word'
    }
  },
    components: {
    'filtrate': filtrate,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .make-an-appointment{
    background-color: #f6f6f6;
    padding-top: 10px;
    height: 100%;
  }
  .make-an-appointment ul li{
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .m-title{
    width: 20%;
    display: inline-block;
  }
  .m-data{
    width: 75%;
    display: inline-block;
  }
  .m_icon{
    width: 8px;
    height: 14px;
    float: right;
  }
  .m-text{
   
    width: 75%;
    display: inline-block;
    height: 190px;
  }
</style>
