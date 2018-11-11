<template>
  <div id="userinfo">
    <div class="userinfo_top">
      <div class="user_right">
        <img>
        <span>刘女士</span>
        <span>女</span>
        <span>35岁左右</span>
      </div>
      <span>箭头</span>
    </div>
      <span>基本信息</span>
      <ul class="basic_info">
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>13262526091</li>
            <li>箭头</li>
          </ul>
        </li>
      </ul>
      <span>订单信息</span>
      <ul class="order_info">
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li><09800/li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li><09800/li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li><09800/li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li><09800/li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li><09800/li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li><09800/li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li><09800/li>
            <li>箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li><09800/li>
            <li>箭头</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import footerNav from '../components/modPage/footerNav'
import homePage from '../components/modPage/homePage' // 引入login.vue组件
export default {
  name: 'home',
  components: {
    'footerNav': footerNav,
    'homePage': homePage,
  },
}
</script>

<style scoped lang="less">
.userinfo{margin-left:30px;margin-right:30px;}
.userinfo_top{
  margin-top:162px;width:100%;height:128px;background-color:#fff;display:flex;justify-comments:space-between;
  img{width:96px;height:96px;border-radius:50%;}
}
.basic_info{
  background-color:#fff;
  .basic_info_title{
    height:88px;line-height:88px;border-bottom:1px solid gray;
    .basic_info_list{
      display:flex;justify-content:space-between;
    }
  }
}
</style>
