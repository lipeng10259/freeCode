<template>
  <div style="width:700px;">
    <el-tag
  :key="index"
  v-for="(tag,index) in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag.label}}
</el-tag>    
<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
        label="类型"
        prop="type"
        :rules="[
        { required: true, message: '类型不能为空'}
        ]"
    >
        <el-input type="type" v-model.number="numberValidateForm.type" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')">添加</el-button>
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
    </el-form-item>
    </el-form>   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          type: ''
        },
        dynamicTags: [],
      };
    },
    mounted(){
      this.getLabel()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            this.addLabel()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      addLabel () {
        this.$http.get('http://localhost:3300/addLabel',{params:{label:this.numberValidateForm.type}}).then(res=>{
          if(res.data.errno == 0) {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 1000
            });
            this.getLabel()
          } else {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 1000
            });
          }
        })   
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
      }
    }
  }
</script>
<style  scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
</style>