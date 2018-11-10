<template>
  <div class="allUser">
    <div class="header_btn">
      <a href="#">筛选 <img src="../assets/img/qqq.jpg"></a>
      <a href="#">时间 <img src="../assets/img/qqq.jpg"></a>
      <a class="search" href="#"><img src="../assets/img/qqq.jpg">搜索</a>
    </div>
    <div class="order">
      <ul>
        <li>
          <span>订单号</span>
          <span>454875847584</span>
          <span>基建未约</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>姓名</span>
          <span>王阿甲</span>
        </li>
        <li>
          <span>姓名</span>
          <span>王阿甲</span>
        </li>
        <li>
          <span>姓名</span>
          <span>王阿甲</span>
        </li>
      </ul>
    </div>
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
