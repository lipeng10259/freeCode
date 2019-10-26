<template>
    <el-aside width="150px">
        <el-menu style="background:transparent;">
            <el-menu-item-group>
                <router-link to='/article'>
                    <el-menu-item index="1-1">文章列表</el-menu-item>
                </router-link>
                
                <router-link to='/addArticle'>
                <el-menu-item index="1-2">添加文章</el-menu-item>
                </router-link>     
                <router-link to='/addType'>
                <el-menu-item index="1-2">添加类型</el-menu-item>
                </router-link>
            </el-menu-item-group>
        </el-menu>

   
    </el-aside>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
      .el-aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            line-height: 200px;

        }
        .router-link-exact-active.router-link-active .el-menu-item{
            background: #B3C0D1;
            color: #409EFF;
        }
</style>