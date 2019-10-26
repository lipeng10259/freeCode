<template>
    <el-form  :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章类型" prop="region">
            <el-select v-model="ruleForm.region"  placeholder="请文章类型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="标题" prop = "pass" >
            <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动形式" prop = 'desc'>
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入标题'));
        } else {
        //   if (this.ruleForm.checkPass !== '') {
        //     this.$refs.ruleForm.validateField('checkPass');
        //   }
          callback();
        }
      };
      var checkType = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('选择文章类型'));
        } else {
        //   if (this.ruleForm.region !== '') {
        //     this.$refs.ruleForm.validateField('checkPass');
        //   }
          callback();
        }
      };

      return {
        ruleForm: {
          pass: '',
          region: '',
          desc: ''
        },
        rules: {
            pass: [
                { validator: validatePass, trigger: 'blur' },
            ], 
            region: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            desc: [
            { required: true, message: '请填写文章描述', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

              console.log(valid)

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>


<style scope>
        .demo-ruleForm{
            width: 700px;
        }
</style>