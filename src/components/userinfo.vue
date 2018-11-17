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
      <span class="arrow"><img  src="../assets/img/Copy2x.png"></span>
    </div>
      <span class="basic-text order-text">基本信息</span>
      <ul class="basic_info">
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">手机</li>
            <li class="center">15215802921</li>
            <li class="arrow"><img src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">家庭电话</li>
            <li class="center">021-22556355</li>
            <li class="arrow"><img src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">住址</li>
            <li class="center">交通西路108弄4号2308室</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">小区名称</li>
            <li class="center">中远两湾城</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">户型</li>
            <li class="center">3室2厅2卫1阳台</li>
           <li class="arrow"><img src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">面积</li>
            <li class="center">120㎡</li>
            <li class="arrow"><img src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">房屋类型</li>
            <li class="lcenter">别墅</li>
            <li class="arrow"><img src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">装修类型</li>
            <li class="center">整装设计</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="left">施工区域</li>
            <li class="center">厨房</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <!-- <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li class="work-content">施工内容
              <textarea placeholder="说说当前的情况吧"></textarea>
            </li>
          </ul>
        </li>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>查看记录</li>
            <li></li>
            <li class="arrow">箭头</li>
          </ul>
        </li> -->
      </ul>
      <ul>
        <li></li>
      </ul>
      <textarea  placeholder="请在此处介绍自己...">施工内容</textarea>
      <ul>
        <li class="basic_info_title"> 
          <ul class="basic_info_list">
            <li>查看记录</li>
            <li></li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
      </ul>
      <span class="basic-text order-text">订单信息</span>
      <ul class="basic_info order_info">
        <li class="basic_info_title"> 
        <ul class="basic_info_list">
            <li class="left">订单号</li>
            <li class="center">09800</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
        </ul>
        <li class="basic_info_title">
          <ul class="basic_info_list">
            <li class="left">接单日期</li>
            <li class="center">2018-12-11</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title">
          <ul class="basic_info_list">
            <li class="left">业务员</li>
            <li class="center">董春华</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title">
          <ul class="basic_info_list">
            <li class="left">订单状态</li>
            <li class="center">基检未约</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title">
          <ul class="basic_info_list">
            <li class="left">预约时间</li>
            <li class="center">2018-11-11</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title">
          <ul class="basic_info_list">
            <li class="left">客户来源</li>
            <li class="center">百度</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title order_info_title">
          <ul class="basic_info_list">
            <li class="left">刷新PSR</li>
            <li class="center">许祥春</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
          </ul>
        </li>
        <li class="basic_info_title order_info_title">
          <ul class="basic_info_list">
            <li class="left">推荐人</li>
            <li class="center">陆卫卫</li>
            <li class="arrow"><img  src="../assets/img/Copy2x.png"></li>
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
#userinfo{background-color:#ccc;}
.userinfo_top{
  width:100%;height:64px;background-color:#fff;display:flex;align-items: center;justify-content: space-between;padding-left: 15px;padding-right:15px;
  .user_img{
    width:48px;height:48px;border-radius: 50%;
  }
  .user_right{
    display: flex;
    align-items: center;
    .user-details{
      margin-left: 10px;
    .user-name{font-size:14px;color: #191F25;}
    span{font-size: 9px;color:#191F25;} 
    }
  }
}
.basic-text{color:#9C9C9C;font-size:12px;background-color: #ccc;display: inline-block;width: 100%;height:25px;line-height:25px;padding-left:15px;}
.basic_info{
  background-color:#fff;
  .basic_info_title{
    height:44px;line-height:44px;border-bottom:1px solid #C6C6C6 ;
    .basic_info_list{
      color:#191F25;width:100%;display: flex;padding-left:15px;padding-right:15px;
      li{
        &:first-child{width: 25%;}
        &:last-child{width:25%;}
        &:nth-child(2){width:50%;}
      }
      .arrow{ text-align: right;}
      .arrow img{
        width: 8px;
        height: 14px;
        
      }
      .work-content::placeholder{
        margin-left:30%;
      }
    }
  }
}
textarea{
  height: 115px;background-color: #fff;width:100%;padding-left:15px;margin-right:15px;margin-bottom:15px;
}
textarea::placeholder {
        color: red;
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
.basic_info_title{
    height:44px;line-height:44px;background-color:#fff;
    .basic_info_list{
      color:#191F25;width:100%;display: flex;padding-left:15px;padding-right:15px;
      li{
        &:first-child{width: 25%;}
        &:last-child{width:25%;}
        &:nth-child(2){width:50%;}
      }
      .arrow{text-align: right;}
      .work-content::placeholder{
        margin-left:30%;
      }
    }
  }
</style>
