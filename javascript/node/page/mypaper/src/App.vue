<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
*{
  padding: 0;
  margin: 0;
}
    a{
        color: #409EFF;
        text-decoration: none;
    }
</style>
