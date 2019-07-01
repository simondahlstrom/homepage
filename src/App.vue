<template>
  <div id="app">
  <Header />
    <b-container>
    <router-view/>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components:{
    Header,
  }
}
</script>

<style scoped>
#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;   
  height: 100%;
  overflow: hidden;   
}
</style>
