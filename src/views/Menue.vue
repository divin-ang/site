<template>
    
    <nav  id="nav" class="navbar navbar-expand-lg navbar-light bg-white position-fixed  nav-container " >
  
  <router-link  to=""  class="navbar-brand disabled">Divin Angapay</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link"> Accueil <span class="sr-only">(current)</span></router-link> 
        
      </li>
      <li class="nav-item">
       
        <router-link  class="nav-link" to="/moi"   >A propos de moi</router-link>
      </li>
      
      <li class="nav-item">
       
        <router-link  to="/contact"  class="nav-link ">Me contacter</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input id="search-input" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" @mousedown="lowLight" @mouseout="highLight">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<style>
.nav-container{
width: 100%;
 z-index: 3;

}
</style>

<script>
export default {
  methods:{
    lowLight(){
    
    let nav = document.getElementById("nav");
    let picture = document.getElementById("picture");
    picture.style.filter ="brightness(30%)"
    nav.style.filter ="brightness(100%)"
    },highLight(){
      document.getElementById("picture").style.filter
      ="brightness(100%)"
    }
  }
}
</script>