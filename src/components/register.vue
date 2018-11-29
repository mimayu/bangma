<template>
  <div class="allUser">
    <h1>立即注册使用</h1>
    <h2>邦马·让天下没有难做的装修</h2>
    <Form class="r-form">
        <FormItem style="font-size: 16px!important;" label="姓名">
            <Input v-model="formLeft.input1" placeholder="请输入联系人姓名" style="width:93%!important;"  id="ivu-input"></Input>
        </FormItem>
        <FormItem label="手机号">
            <Input v-model="formLeft.input2" placeholder="请输入手机号" style="width:93%!important;"  id="ivu-input"></Input>
        </FormItem>
        <FormItem label="公司姓名">
            <Input v-model="formLeft.input3" placeholder="请输入公司或团队名称" style="width:93%!important;"  id="ivu-input"></Input>
        </FormItem>
        <FormItem >
            <Button class="register-btn" type="success" long>立即注册使用</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import footerNav from './modPage/footerNav' // 引入页脚
export default {
        data () {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .allUser{ padding: 10px; text-align: center;
    h1{
      text-align: center; font-size: 18px; color: #000; line-height: 30px;
    }
    h2{
      text-align: center; font-size: 12px; color: #666;
    }
    .r-form{
      margin: 20px 0 0 10px;
      line-height: 30px;
      text-align: left;
      
    }
    input{
      display: inline-block;
      width: 80%!important;
      line-height: 1.5;
      padding: 2px 4px;
      font-size: 12px;
      border-bottom: solid 1px #dcdee2 !important;
      border-radius: 0px;
      position: relative;
      cursor: text;
    }
    .register-btn{
      background: #3395FA;
      font-size: 16px;
      margin-top: 20px;
    }
  }
  .ivu-form .ivu-form-item-label{
    font-size: 16px!important;
  }
  .ivu-form-item{
      margin-bottom: 10px!important;
    }
  .ivu-form .ivu-form-item-label{
      font-size: 16px!important;
    }
</style>
