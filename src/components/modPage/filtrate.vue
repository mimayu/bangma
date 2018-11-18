<template>
  <div class="filtrate">
   <ul class="filtrate_tab">
      <li>
        <Button value="toggle" v-on:click="toggle()">筛选</Button>
      </li>
      <li><Button value="toggle" v-on:click="toggle()">时间</Button></li>
      <li>
        <Button shape="circle" icon="ios-search">搜索</Button>
      </li>
   </ul>
    <section class="filtrate-list" v-show="isShow">
      <Form :model="formData">
      <h6>筛选</h6>
      <Row :gutter="16">
        <i-col span="8">
          <div>基检未约</div>
        </i-col>
        <i-col span="8">
          <div>基检预约</div>
        </i-col>
        <i-col span="8">
          <div>基检再约</div>
        </i-col>

      </Row>
        <Row :gutter="16">
        <i-col span="8">
          <div>基检取消</div>
        </i-col>
        <i-col span="8">
          <div>签约等待</div>
        </i-col>
        <i-col span="8">
          <div>签约成功</div>
        </i-col>
      </Row>
        <Row :gutter="16">
        <i-col span="8">
          <div>签约失败</div>
        </i-col>
        <i-col span="8">
          <div>派工完成</div>
        </i-col>
        <i-col span="8">
          <div>开工实施</div>
        </i-col>
      </Row>
        <Row :gutter="16">
        <i-col span="8">
          <div>完工验收·付款</div>
        </i-col>
        <i-col span="8">
          <div>审核完成</div>
        </i-col>
        <i-col span="8">
          <div>结算</div>
        </i-col>
      </Row>
      </Form>
      <div class="demo-drawer-footer">
          <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
          <Button type="primary" @click="value3 = false">Submit</Button>
      </div>
    </section>
    <section class="time-box"  v-show="isShow">
      <Row>
        <i-col span="12">
            <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
        </i-col>
        <i-col span="12">
            <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
        </i-col>
      </Row>
    </section>
    <section class="serach-box"  v-show="isShow">
        这里搜索
    </section>
  </div>
</template>

<script>
export default {
  name: "filtrate",
  data:function() {
    return {
      // value1: false
      isShow: {
        isShow:false
      },
      formData: {},
      options3: {
        disabledDate(date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      options4: {
        disabledDate(date) {
          const disabledDay = date.getDate();
          return disabledDay === 15;
        }
      }
    };
  },
  methods: {
    toggle: function() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.filtrate {
  .filtrate_tab {
    padding: 10px;background: #fff;
    position: relative;
    border-bottom: 1px solid #d8d8d8;
    li {
      display: inline-block;
      .ivu-btn>span{font-size: 14px;color: #999;}
      &:nth-child(3){
        border-left: 1px solid #d8d8d8;
      }
    }
  }
  li:last-child {
    right: 0;
    position: absolute;
  }
  button {
    border: none;
    outline: none;
    box-shadow: none;
    // color: #1b96ed;
    font-size: 14px;
  }
}
.filtrate-list {
  background: #fff;
  padding: 10px;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  h6 {
    padding: 10px;
  }
}
.ivu-col {
  margin-bottom: 15px;
  div {
    background: #f5f5f5;
    text-align: center;
    height: 35px;
    line-height: 35px;
  }
}
</style>
