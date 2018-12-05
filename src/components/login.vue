<template>
  <div class="allUser">
    <div class="logo"><img src=""/></div>
     <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" >
       <FormItem label="手机号" prop="mobile">
            <Input type="text" placeholder="请输入手机号" style="width:94%!important;" v-model="formCustom.mobile" number/>
        </FormItem>
        <FormItem label="密码" prop="passwd">
            <Input type="password" placeholder="请输入密码" style="width:94%!important;" v-model="formCustom.passwd"/>
        </FormItem>
        <FormItem label="" prop="code" class="yzm-code">
            <Row>
                <Col span="12">
                    <Input type="text" class="yzm" placeholder="请输入验证码" v-model="formCustom.code"/>
                </Col>
                <Col span="11" offset="1" class="yzm-pic-contain">
                    <img class="yzm-pic" :src='picCode' @click="handleGetCode">
                </Col>
            </Row>
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
    import { postLogin } from '@/server';

    export default {
        data () {
            const validateMobile = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号'));
                }else {
                    callback();
                }
                // if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(value))){ 
                //     callback(new Error('请输入正确的手机号'));
                // }else {
                //     callback();
                // }
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else {
                    callback();
                }
            };
            const validateCode = (rule, value, callback) => {
                if(!(/\w{4}$/.test(value))){ 
                    callback(new Error('请输入正确的验证码'));
                }else {
                    callback();
                }
            };

            return {
                picCode: '',
                formCustom: {
                    mobile: '',
                    passwd: '',
                    code: ''
                },
                ruleCustom: {
                    mobile: [
                        { validator: validateMobile, trigger: 'blur' }
                    ],
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    code: [
                        { validator: validateCode, trigger: 'blur' }
                    ]                 
                }
            }
        },
        created() {
            this.picCode = this.createPicCode();
        },
        methods: {
            createPicCode () {
                let time = new Date().getTime();
                return `/api/getcode/${time}`;
            },
            handleGetCode () {
                this.picCode = this.createPicCode();
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let params = {
                            'sUsername': this.formCustom.mobile,
                            'sPassword': this.formCustom.passwd,
                            'sCode': this.formCustom.code
                        }
                        postLogin(params).then(
                            res => {
                                if(res.success == 1) {
                                    this.$Message.success('登录成功');
                                    this.$router.push('/detection');
                                    return;
                                }
                                if(res.success == 2) {
                                    if(res.msg == '验证码输入有误') {
                                        this.picCode = this.createPicCode();
                                    }
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
        .yzm-code {
            margin-top: 20px;
        }
        .yzm-pic-contain {
            text-align: right;
            height: 42px;
        }
        .yzm-pic{
            width: 130px;
            height: 42px;
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
