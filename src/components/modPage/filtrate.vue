<template>
  <div class="filtrate">
   <ul class="filtrate_tab">
      <li>
        <Button  v-on:click="toggle()">筛选</Button>
      </li>
      <li><Button  v-on:click="toggle('time')">时间</Button></li>
      <li>
        <Button shape="circle" icon="ios-search"  v-on:click="toggle('search')" >搜索</Button>
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
          <Button style="margin-right: 8px;background: #E9F3FC;" @click="value3 = false">Cancel</Button>
          <Button type="primary" @click="value3 = false">Submit</Button>
      </div>
    </section>
    <section class="filtrate-list time-box"  v-show="time">
      <Row>
        <i-col span="10">
            <DatePicker type="date" :options="options3" placeholder="Select date"></DatePicker>
        </i-col>
      </Row>

      <Row>

        <i-col span="10">
            <DatePicker type="date" :options="options3" placeholder="Select date"></DatePicker>
        </i-col>
      </Row>
    </section>
    <section class="filtrate-list serach-box"  v-show="search">
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
      isShow:false,
      time:false,
      search:false,
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
    // toggle: function(val){
    //   console.log(val,this.val = !this.val)
    //   this.val = !this.val;
    // }
     toggle: function(val){
      if(val=="time"){
        this.time = !this.time;
      }else if(val=="search") {
        this.search = !this.search;
      }else{
        this.isShow = !this.isShow;
      }
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
    width: 45%;
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
.demo-drawer-footer{
  margin-top: 30px;
}
.time-box{
  .ivu-input-icon-normal+.ivu-input{padding-right: 0;}
  .ivu-input{height: 23px;border: 0;outline: 0;}
}
.ivu-input:focus {
    border-color:#fff;
    outline: 0;
    box-shadow:none}
</style>
