<template>
  <div class="allUser">
    <h1>立即注册使用</h1>
    <h2>邦马·让天下没有难做的装修</h2>
    <Form ref="formInfo" class="r-form" :model="formInfo" :rules="ruleCustom">
        <FormItem style="font-size: 16px!important;" label="姓名" prop="sContacts">
            <Input v-model="formInfo.sContacts" placeholder="请输入联系人姓名" style="width:93%!important;"  id="ivu-input"></Input>
        </FormItem>
        <FormItem label="手机号" prop="sMobile">
            <Input v-model="formInfo.sMobile" placeholder="请输入手机号" style="width:93%!important;"  id="ivu-input"></Input>
        </FormItem>
        <FormItem label="公司姓名" prop="sName">
            <Input v-model="formInfo.sName" placeholder="请输入公司或团队名称" style="width:93%!important;"  id="ivu-input"></Input>
        </FormItem>
        <FormItem>
            <Button class="register-btn" type="primary" long @click="handleSubmit('formInfo')">立即注册使用</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import { postRegiste } from '@/server';
import footerNav from './modPage/footerNav' // 引入页脚

export default {
        data () {
            const validateMobile = (rule, value, callback) => {
                if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(value))){ 
                    callback(new Error('请输入正确的手机号'));
                }else {
                    callback();
                }
            };
            const validateName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入公司或团队名称'));
                }else {
                    callback();
                }
            };
            const validateContacts = (rule, value, callback) => {
                if(value === ''){ 
                    callback(new Error('请输入联系人姓名'));
                }else {
                    callback();
                }
            };

            return {
                formInfo: {
                    'sMobile': '',
                    'sName': '',
                    'sContacts': ''
                },
                ruleCustom: {
                    sMobile: [
                        { validator: validateMobile, trigger: 'blur' }
                    ],
                    sName: [
                        { validator: validateName, trigger: 'blur' }
                    ],
                    sContacts: [
                        { validator: validateContacts, trigger: 'blur' }
                    ]                 
                }
            }
        },
        methods: {
            handleSubmit (name) {    
                console.log(1)            
                this.$refs[name].validate((valid) => {
                    if (valid) {
                       let params = {
                            'sMobile': this.formInfo.sMobile,
                            'sName': this.formInfo.sName,
                            'sContacts': this.formInfo.sContacts
                        }
                        postRegiste(params).then(
                            res => {
                                if(res.success == 1) {
                                    this.$Message.success(res.msg);
                                }else {
                                    this.$Message.error(res.msg);
                                }
                            }
                        )
                        
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
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
