<template>
    <el-form  :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章类型" prop="type">
            <el-select v-model="ruleForm.type"  placeholder="请文章类型">
                <el-option :label="type.label" :value="type.label" v-for = "(type,index) in dynamicTags" :key = 'index'></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="标题" prop = "title" >
            <el-input type="text" v-model="ruleForm.title" autocomplete="off"></el-input>
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
      var validatetitle = (rule, value, callback) => {
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
          title: '',
          type: '',
          desc: ''
        },
        rules: {
            title: [
                { validator: validatetitle, trigger: 'blur' },
            ], 
            type: [
                { required: true, message: '文章类型', trigger: 'change' }
            ],
            desc: [
            { required: true, message: '请填写文章描述', trigger: 'blur' }
          ]
        },
        dynamicTags: []
      };
    },
    mounted(){
      this.getLabel()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            this.addArticle()

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getLabel () {
        this.$http.get('http://localhost:3300/getLabel').then(res=>{
          if(res.data.errno == 0) {
            this.dynamicTags = res.data.msg
  
          } else {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 1000
            });
          }
        })  
      },
      addArticle () {
        this.$http.get('http://localhost:3300/addArticle',{params:{title:this.ruleForm.title,type:this.ruleForm.type,desc:this.ruleForm.desc}}).then(res=>{
          if(res.data.errno == 0) {
            this.dynamicTags = res.data.msg
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 1000
            });
  
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
        .demo-ruleForm{
            width: 700px;
        }
</style>