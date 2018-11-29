<template>
  <div class="allUser">
    <div class="logo"><img src=""/></div>
     <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" >
       <FormItem label="手机号" prop="手机号">
            <Input type="text" placeholder="请输入手机号" style="width:94%!important;" v-model="formCustom.age" number/>
        </FormItem>
        <FormItem label="密码" prop="密码">
            <Input type="password" placeholder="请输入密码" style="width:94%!important;" v-model="formCustom.passwd"/>
        </FormItem>
        <FormItem label="验证码" prop="验证码" style="width:100%" >
          <br>
            <Input type="text" class="yzm" placeholder="请输入验证码" v-model="formCustom.passwdCheck"/>
        </FormItem>
        
        <FormItem>
            <Button class="login-btn" type="primary" @click="handleSubmit('formCustom')">登陆</Button>
            <Button class="login-btn" type="success" long>立即注册使用</Button>
            <a href="">忘记密码</a>
        </FormItem>
    </Form>
    <div class="page-footer">
      <h1>邦马</h1>
      <h2>登录即代表您已同意邦马隐私政策</h2>
    </div>
  </div>
</template>

<script>
import footerNav from './modPage/footerNav' // 引入页脚
export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Age cannot be empty'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please enter a numeric value'));
                    } else {
                     if (value < 18) {
                            callback(new Error('Must be over 18 years of age'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
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
  .allUser{ padding: 10px; text-align: left;
    .logo{
      text-align:center;
      margin-bottom: 10px;
    }
    .logo img{
      width: 37px; height: 37px;
    }
    .page-footer{
      position: fixed;
      bottom: 10px;
      text-align: center;
      width: 100%;
    }
    .yzm{width: 45%; display: block; float: left;} 
    .yzm-pic{
      width: 155px;
      height: 40px;
      display: block;
      float: right;
      margin-right:5px;
    }
    .login-btn{
      width: 100%;
      margin: 10px auto;
      font-size: 16px;
    }
    h1{
      text-align: center; font-size: 18px; color: #000; line-height: 30px;
    }
    h2{
      text-align: center; font-size: 12px; color: #BABABA;
    }
    .ivu-form-item{
      margin-bottom: 10px!important;
    }
  }
</style>
