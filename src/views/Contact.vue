<template>
    
  <div :style="{'background-image': 'url(' + require('../assets/laptop1.jpg') + ')'}"  class="temp">
  <div class="menu-contact" >
  <Menue />
  </div>
   
   <div id="contact" >
   
      <div class="container"  >
        <form class="contact-form  " @submit.prevent="sendEmail" id="cont">
          <div class="form-group">
          <label>Noms</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="noms"
            class="form-control"
             id="input-nom"
             required
          >
          
     
          </div>
          <div class="form-group">
           <label>Email</label>
          <input 
          class="form-control"
            type="email" 
            v-model="email"
            name="email"
            placeholder="Votre email"
            ria-describedby="emailHelp"
            id="input-email"
            
            >
        
          </div>
         <div class="form-group">
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="20" rows="5"
            placeholder="Tapez votre message ici"
            class="form-control"
             id="input-message"
          
            required
            >
          </textarea>
         
         </div>
         
          
          <input  id="input-submit" type="submit" value="Envoyer">
        </form>
    </div>
       
   
   </div>
  
  </div>

</template>


<script>
import Menue from './Menue'
import emailjs from 'emailjs-com';

export default {
    
    components: { Menue },
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    envoyer(){
      this.sendEmail();
      this.$router.push({ name: 'Accueil' })
      
    },
    sendEmail(e) {
      try {
        emailjs.sendForm('service_63jdf7g', 'template_cmtenal', e.target, 'user_TYivqMiAqi5wfwWo2zOAC', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        this.$router.push({ name: 'Accueil' })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
    components:{
        Menue,
    }
  }
}
    
    

</script>

<style >


.container{

margin-top:4em;



  

}

#cont{
width: 85%;
background-color: white;
height: 26em;
}
.temp{
height:50em;
}
#input-email, #input-message,#input-nom{
width: 70% ;
margin-left: 3em;
}
label,#input-submit{
margin-left:3em;
}

.email{
margin-top: 8em;
font-size: 25px;
}
</style>