<template>
  <div class="filtrate">
   <ul class="filtrate_tab">
      <li>
        <Button>筛选</Button>
      </li>
      <li><Button>时间</Button></li>
      <li>
        <Button shape="circle" icon="ios-search">Search</Button>
      </li>
   </ul>
    <section class="filtrate-list">
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
  </div>
</template>

<script>
export default {
  name: "filtrate",
  data() {
    return {
      // value1: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.filtrate {
  .filtrate_tab {
    padding: 10px;
    position: relative;
    border-bottom: 1px solid  #D8D8D8;
    li {
      display: inline-block;
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
    color: #1B96ED;font-size: 14px;
  }
}
.filtrate-list{
  padding: 10px;
  h6{
    padding: 10px; 
  }
}
.ivu-col{
  margin-bottom: 15px;
  div{background: #F5F5F5;text-align: center;}
  }
</style>
