<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Divin Angapay</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/" class="nav-link">Accueil</router-link>
        
       <router-link  class="nav-link" to="/moi">A propos de moi</router-link>
      <router-link to="/contact" class="nav-link">Me contacter</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

       

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
 
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
    
    
    },highLight(){
    
    }
  }
}
</script>