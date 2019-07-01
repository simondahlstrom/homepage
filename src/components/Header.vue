<template>
    <b-navbar id="navbar" variant="faded" type="light">
      <b-navbar-brand id="brand">
        <img src="https://avatars1.githubusercontent.com/u/6850768?s=460&v=4" class="d-inline-block align-top" style="width:30px;height:30px" alt="Simon">
        Simon Dahlström <small class="text-muted">developer</small>
        <span id="socialmedia">
          <a href="https://www.github.com/simondahlstrom" target="_blank"><img src="../assets/GitHub-Mark-32px.png"/></a>
          <a href="https://www.twitter.com/SimonDahlstromD" target="_blank"><img id="twitter" src="../assets/Twitter-Mark.png" /></a>
        </span>        
      </b-navbar-brand>
      <!-- Continue adding layers to the website at a later date
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      -->
    </b-navbar>
</template>

<style>
    .navbar{
  background-color: rgba(250, 250, 250,.9);
  margin-bottom: 30px;
}
#nav{
  margin: 0 auto;
  margin-right: 900px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

#socialmedia{
  margin-left: 10px;
}
#socialmedia img{
  margin-left: 6px;
}
#twitter{
  height: 32px;
  width: 32px;
}
</style>