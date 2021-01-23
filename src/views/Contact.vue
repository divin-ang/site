<template>
    
  <div >
  <div class="menu-contact">
  <Menue />
  </div>
   
   <div id="contact" :style="{'background-image': 'url(' + require('../assets/laptop1.jpg') + ')'}">
      <p class="email">Email  :   angapaydivin@gmail.com</p>
       
   
   </div>
  
  </div>

</template>


<script>
import Menue from './Menue'
export default {
    
    components:{
        Menue,
    }
}
</script>

<style >

#contact{
 margin-top: 4em;
 
   position: absolute;
   text-align: center;
  
   width: 100%;
   height: 85%;
}
.menu-contact{
   
     position: absolute;

}
.email{
margin-top: 8em;
font-size: 25px;
}
</style>