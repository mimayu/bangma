<template>
  <ul class="list">
    <li>
      <dl>
        <dt>
          <span class="order_num">订单号：</span>
          <span class="number">232435436546546</span>
          <span class="status">基检未约</span>
        </dt>
        <dd>
          <span>姓名：</span>
          毛先生
        </dd>
         <dd>
          <span>手机号：</span>
          17283904574875
        </dd>
         <dd>
          <span>地址：</span>
          上海市普陀区远景路97弄48号2103室
        </dd>
         <dd>
          <span>施工内容：</span>
          刷新+局装；需要做的有两套房，报价合适也想重新装修，就是怕麻烦，材料要用最好的 ...
        </dd>
         <dd>
          <span>预约时间：</span>
          -
        </dd>
         <dd>
            <router-link class="yuyue" to="">预约</router-link>
        </dd>
      </dl>
    </li>
    <li>
      <dl>
        <dt>
          <span class="order_num">订单号：</span>
          <span class="number">232435436546546</span>
          <span class="status">基检未约</span>
        </dt>
        <dd>
          <span>姓名：</span>
          毛先生
        </dd>
         <dd>
          <span>手机号：</span>
          17283904574875
        </dd>
         <dd>
          <span>地址：</span>
          上海市普陀区远景路97弄48号2103室
        </dd>
         <dd>
          <span>施工内容：</span>
          刷新+局装；需要做的有两套房，报价合适也想重新装修，就是怕麻烦，材料要用最好的 ...
        </dd>
         <dd>
          <span>预约时间：</span>
          -
        </dd>
         <dd>
          <router-link class="yuyue" to="">预约</router-link>
        </dd>
      </dl>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      // msg: '我是hello word'
    };
  }
};
</script>

<style scoped lang='less'>
.list {
  // margin: 0 10px;
  background: #eee;  
  li{background: #fff;margin-bottom: 5px;padding-left: 10px;}
  dt {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #d8d8d8;
    position: relative;
    .order_num {
      font-size: 12px;
      display: inline-block;
      width: 60px;

      color: #999999;
    }
    .number {
      font-size: 14px;
      color: #151515;
    }
    .status {
      font-size: 14px;
      position: absolute;
      right: 10px;
      line-height: 44px;
      color: #ff5601;
    }
  }
  dd {
      position: relative;padding:5px 10px;padding-left: 60px;
      font-size: 12px;
      color: #161616;
      span {
        position: absolute;left: 0;
        font-size: 12px;
        color: #999999;
        display: inline-block;
        width: 60px;
      }
    &:last-child{text-align: right; border-top: 1px solid #eee;}

    }
  .yuyue{
    padding: 2px 10px ; height: 44px; line-height: 44px;border-radius: 22px;
    border: 1px solid #eee;
  }
}
</style>
