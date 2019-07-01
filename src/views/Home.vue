<template>
  <div class="home">
  <b-container>  
    <b-jumbotron header="Introduction" lead="Simon's Journey through the cyber world and it's technologies">
      <p>On this site you can find links to Simon's current and previous personal projects, links below.<br/>
       I am a curious induvidual with a B.S. degree in system science and I'm constantly looking for adventures.</p>      
    </b-jumbotron>
  <b-row>
  <b-col sm v-for="(item, index) in allRepos" :key="item.id">
      <b-card id="card"
        :header="item.name"
        header-tag="header"
        :footer="item.language"
        footer-tag="footer"       
      >
        <b-card-text>{{ item.description }}</b-card-text>
        <b-button :href="item.html_url" target="_blank" variant="primary">Go to Project</b-button>
      </b-card>  
    </b-col> 
  </b-row>
  </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',  
  data() {
    return {
      allRepos: []
    }
  },
  computed: mapState({
    custom: 'title',
    repos: 'allRepo',    
  }),  
  created() {
    fetch('https://api.github.com/users/simondahlstrom/repos', {
      method: 'get'
    })
      .then(response => {
        return response.json()
      })
      .then((data) => {
        this.$data.allRepos = data;
      })
    
  },
  mounted(){}  
}
</script>

<style scoped> 
  .btn{
    width: 35%;
    font-size: 12px;
    margin-top: 25px;
  }
  .card-header div{
    font-weight: bold;
  }
  .card-text{
  }
</style>
