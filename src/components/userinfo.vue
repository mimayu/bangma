<template>
  <div id="userinfo">
    <div class="userinfo_top">
      <div class="user_right">
        <img class="user_img">
        <div class="user-details">
          <div class="user-name">刘女士</div>
          <span>女</span>
          <span>35岁左右</span>
        </div>
      </div>
      <span>箭头</span>
    </div>
      <span class="basic-text">基本信息</span>
      <ul class="basic_info">
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>手机</li>
            <li>15215802921</li>
            <li class="arrow"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>家庭电话</li>
            <li>021-22556355</li>
            <li class="arrow"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>住址</li>
            <li>交通西路108弄4号2308室</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>小区名称</li>
            <li>中远两湾城</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>户型</li>
            <li>3室2厅2卫1阳台</li>
            <li class="arrow"> 箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>面积</li>
            <li>120㎡</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>房屋类型</li>
            <li>别墅</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>装修类型</li>
            <li>整装设计</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>施工区域</li>
            <li>厨房</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <!-- <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="work-content">施工内容
              <textarea placeholder="说说当前的情况吧"></textarea>
            </li>
          </ul>
        </li> -->
        <!-- <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>查看记录</li>
            <li></li>
            <li class="arrow">箭头</li>
          </ul>
        </li> -->
      </ul>
      <textarea placeholder="说说当时的情况吧">施工内容</textarea>
      <ul>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>查看记录</li>
            <li></li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
      </ul>
      <span class="order-text">订单信息</span>
      <ul class="order_info">
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li>09800</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li>09800</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li>09800</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li>09800</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li>09800</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li>09800</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li>09800</li>
            <li class="arrow">箭头</li>
          </ul>
        </li>
        <li class="order_info_title">
          <ul class="order_info_list">
            <li>订单号</li>
            <li>09800</li>
            <li class="arrow">箭头</li>
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
#userinfo{margin-left: 15px;margin-right:15px;}
.userinfo_top{
  width:100%;height:64px;background-color:#fff;display:flex;align-items: center;justify-content: space-between;
  .user_img{
    width:48px;height:48px;border-radius: 50%;
  }
  .user_right{
    display: flex;
    align-items: center;
    .user-details{
    .user-name{font-size:14px;color: #191F25;}
    span{font-size: 9px;color:#191F25;}
    }
  }
}
.basic-text{color:#9C9C9C;font-size:12px;}
.basic_info{
  background-color:#fff;
  .basic_info_title{
    height:44px;line-height:44px;border-bottom:1px solid #C6C6C6 ;
    .basic_info_list{
      color:#191F25;width:100%;display: flex;
      li{
        flex: 1;
        &:first-child{width: 20%;}
        &:last-child{width:20%;}
        &：nth-child(2){width:60%;}
      }
      .arrow{text-align: right;}
      .work-content::placeholder{
        margin-left:30%;
      }
    }
  }
}
textarea{
  height: 115px;background-color: #fff;
}
.order-text{color:#9C9C9C;font-size:12px;}
.order_info{
  background-color: #fff;
  .order_info_title{
    height:44px;line-height:44px;border-bottom:1px solid #c6c6c6;
    .order_info_list{
      color:#191F25;width:100%;display: flex;
       li{
        flex: 1;
        &:first-child{width: 20%;}
        &:last-child{width:20%;}
        &：nth-child(2){width:60%;}
      }
      .arrow{text-align: right;}
    }
  }
}
</style>
