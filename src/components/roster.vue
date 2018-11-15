<template>
 
  <div class="roster">
    <ul>
      <li>姓名 <Input class="name" v-model="value" placeholder="请输入姓名 2-15个字" /></li>
      <li>姓别  </li>
      <li>年龄</li>
      <li>手机号<Input class="name" v-model="value" placeholder="请输入手机号" /></li>
      <li>住址<Input class="name" v-model="value" placeholder="请输入住址" /></li>
      <li>故乡</li>
      <li>身份证<Input class="name" v-model="value" placeholder="请输入身份证号码" /></li>
      <li>学历</li>
      <li>专业<Input class="name" v-model="value" placeholder="请输入专业" /></li>
      <li>入职时间</li>
      <li>工号</li>
      <li>部门</li>
      <li>角色</li>
      <li>分组</li>
      <li>用户名</li>
      <li>密码</li>
    </ul>
</div>

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
  .roster li{
    text-align: left;
    border-bottom: solid 1px #c6c6c6;
    line-height: 44px;
    padding-left: 10px;
    .name{width:90%}
  }
</style>
