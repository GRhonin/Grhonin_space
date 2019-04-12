<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
html
    padding 0
body
    padding 0
    margin 0
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /* 字体抗锯齿 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

