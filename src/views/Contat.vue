<template>
<div>
<div  >
<Menue class="menu" />
</div>

 <div class="container">
        <form class="contact-form " @submit.prevent="sendEmail">
          <div class="form-group">
          <label>Noms</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="noms"
            class="form-control"
          >
          </div>
          <div class="form-group">
           <label>Email</label>
          <input 
          class="form-control"
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            ria-describedby="emailHelp"
            >
          </div>
         <div class="form-group">
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message"
            class="form-control"
            
            >
          </textarea>
         
         </div>
         
          
          <input type="submit" value="Envoyer">
        </form>
    </div>
</div>
   
</template>

<style >
.menu{

  margin-bottom: 2em;  
}
form{
  padding-top: -2em;  
}

</style>

<script>
import emailjs from 'emailjs-com';
import Menue from '../views/Menue'

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