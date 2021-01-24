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

 
   position: absolute;
   text-align: center;
   width:100%;
   height:100%;
  
  
}
.menu-contact{
   

}
.email{
margin-top: 8em;
font-size: 25px;
}
</style>