<template>
  <div class="home">
  <b-container>  
    <Intro />
    <Repos />
  </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Intro from '../components/Intro.vue'
import Repos from '../components/Repos.vue'

export default {
  name: 'home',  
  components:{
    Intro,
    Repos,
  },  
  computed: mapState({
    custom: 'title',
    repos: 'allRepo',    
  }),  
  
  mounted(){}  
}
</script>

<style scoped> 
  
</style>
