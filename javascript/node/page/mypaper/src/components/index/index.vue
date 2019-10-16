<template>
    <el-container class="is-vertical container_height">
      <headerBar></headerBar>
      <el-container>
        <asiderBar></asiderBar>
        <el-main>
          <router-view></router-view>
        </el-main> 
      </el-container>
    </el-container>
</template>

<script>
import headerBar  from './../../template/header/header'
import asiderBar  from './../../template/asider/asider'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    headerBar,
    asiderBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    width:100%;
    height: 100%;
  }
  .container_height{
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }

</style>
