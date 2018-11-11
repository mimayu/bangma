<template>
  <div class="make-an-appointment">
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
  </div>
  <!--<div class="record">
    <h3>签约成功  2008-09-09 16:30</h3>
    <div class="r-content">
      <p>客户临时提了个小需求，让帮在卫生间马桶旁边装个插座，好让她在上洗手间时可以可以给手机充电。</p>
      <p class="r-pic">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
      </p>
    </div>
    <h3>签约成功  2008-09-09 16:30</h3>
    <div class="r-content">
      <p>客户临时提了个小需求，让帮在卫生间马桶旁边装个插座，好让她在上洗手间时可以可以给手机充电。</p>
      <p class="r-pic">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
          <img class="record_icon" src="../assets/img/5.png">
      </p>
    </div>
</div>
 -->
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
