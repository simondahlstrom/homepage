<template>
  <b-row>
  	<b-col id="repoCard" class="col-md-4" v-for="(item, index) in allRepos" :key="item.id">
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
</template>

<script>
export default {
	data() {
    return {
      allRepos: [],
    }
  },
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
}
</script>

<style>
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
  .col-md-4{
    margin-bottom: 20px;
  }
</style>