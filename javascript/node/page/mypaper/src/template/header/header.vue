<template>
        <el-header>
            <el-dropdown class = "dropdown_right"> 
                <span class="el-dropdown-link">
                    {{user.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown" @click="siginUp">
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>                                
        </el-header>
</template>
<script>
export default {
    data(){
        return {
            user:{
                name:''
            }
        }
    },
    created(){
        this.getUserMsg()
        console.log(1)
    },
    methods:{
        getUserMsg(){
            this.$http.get('http://localhost:3300/userMsg').then((res)=>{
                console.log(res)
            })
        },
        siginUp(){
            this.$http.get('http://localhost:3300/siginUp').then((res)=>{
                console.log(res)
            }) 
        }
    }
}
</script>
<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .dropdown_right{
        float: right;
    }

</style>