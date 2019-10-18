<template>
    <div class="form_content">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <p style="width:100%;text-align:center;padding-left:30px;margin-bottom:30px;color:#606266;">登录</p>
            <el-form-item label="账号" prop="name">
                <el-input v-model.number="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item >
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click.prevent="toRegister">去注册</el-button>
            </el-form-item>
        </el-form>         
    </div>
</template>

<script>
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          name: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.siginIn()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toRegister() {
         this.$router.push({path:'/register'})
      },
      siginIn () {
        this.$http.post('http://localhost:3300/login',{name:this.ruleForm.name,password:this.ruleForm.pass}).then(res=>{
          if(res.data.errno == 0) {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 1000
            });

            setTimeout(()=>{
              this.$router.push({path:'/'})
            },1000)
            // this.dialogVisible = true
            // this.errorText = res.data.msg
          } else {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 1000
            });
          }
        })        
      }
    }
  }
</script>

<style scope>
    .form_content{
        width: 600px;
        padding-top: 30px;
        border-radius: 10px;
        margin: 0 auto;
    }
    .demo-ruleForm{
        width: 500px;
        padding: 30px 30px 30px 0;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 5px #cccccc; 
    }
    .margin_left{
        margin-left: 20px;
    }
</style>