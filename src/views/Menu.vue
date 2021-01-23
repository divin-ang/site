<template>


 <nav  id="menu_item"> 

 <router-link  to="/moi"   id="menu_itemP">Divin Angapay</router-link>

 <router-link  to="/"  id="menu_itemA">Accueil</router-link>
 <router-link  to="/moi"   id="menu_itemP">A propos de moi</router-link>
 <router-link  to="/contact"   id="menu_itemC">Me contacter</router-link>
 
</nav>


    
</template>

<style >
#menu_itemA,#menu_itemP,#menu_itemC{
    text-decoration: none;
    
    font-size: 20px;
    margin-left: 7em;
    color:rgba(255, 255, 255, 0.897);
    border:none;
 
    
    filter: brightness(80%);
    border-radius: 3;
    
   
}

#menu_itemA:hover,#menu_itemP:hover,#menu_itemC:hover  {
  background-color:orange;
   filter: brightness(100%);

}



#nom{
    margin-left: 5em;
    font-size: 20px;  
    color:white;
    
}
#menu_item{



 

   
}
#menu{
   

}

</style>