<template>
  <el-table
    :data="articleData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="上传者"
      width="180">
      <template slot-scope="scope">
    
          <!-- <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p> -->
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.author }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="文章标题"
      >
      <template slot-scope="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
        <el-table-column
      label="文章内容"
      >
      <template slot-scope="scope">
        <span>{{ scope.row.desc }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        articleData: [{
          id:'123',
          date: '2016-05-02',
          author: '王小虎',
          title:'文章标题',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'123',
          date: '2016-05-02',
          author: '王小虎',
          title:'文章标题',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'123',
          date: '2016-05-02',
          author: '王小虎',
          title:'文章标题',
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'123',
          date: '2016-05-02',
          author: '王小虎',
          title:'文章标题',
          desc: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    mounted() {
      this.articleList()
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.deleteArticle(row.articleId)
      },
      articleList(){
        this.$http.get('http://localhost:3300/articleList').then(res=>{
          if(res.data.errno == 0) {
            this.articleData = res.data.data
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
      },
      deleteArticle (id) {
        this.$http.get('http://localhost:3300/deteleArticle',{params:{id:id}}).then(res=>{
          if(res.data.errno == 0) {
            this.$message({
              message: res.data.msg,
              type: 'success',
              duration: 1000
            });
            this.articleList()
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
