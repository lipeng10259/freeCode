<template>
    <div class="form_content">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <p style="width:100%;text-align:center;padding-left:30px;margin-bottom:30px;color:#606266;">注册</p>
            <el-form-item label="账号" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click.prevent="toLogin">去登录</el-button>
                <!-- <el-button></el-button> -->
                <!-- <el-dropdown  @click="register">
                    <span class="el-dropdown-link margin_left">
                        去登录<i class="el-icon-arrow-right el-icon--right"></i>
                    </span>                        
                </el-dropdown> -->
            </el-form-item> 
        </el-form>
        <el-dialog
          title="提示"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose">
          <span>{{errorText}}</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>         
    </div>
</template>

<script>
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        callback()
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
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        errorText:'无信息',
        dialogVisible: false,
        ruleForm: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.postMsg()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toLogin() {
          this.$router.push({path:'/login'})
      },
      postMsg(){
        this.$http.post('http://localhost:3300/register',{name:this.ruleForm.name,password:this.ruleForm.pass}).then(res=>{
          if(res.data.errno == 0) {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 1000
            });

            setTimeout(()=>{
              this.toLogin()
            },1000)
            // this.dialogVisible = true
            // this.errorText = res.data.msg
          } else if(res.data.errno == -1){
            this.dialogVisible = true
            this.errorText = res.data.msg
          } else {

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