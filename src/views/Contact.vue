<template>
<div>
<Menue id="menu"/>
 <div class="container">
        <form>
          <label>Noms</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Vos noms"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Envoyer" @click="envoyer">
        </form>
    </div>
</div>
   
</template>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin-top:4em;
  margin-left:7em;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
#menu{
    height: 3em;
  
  
    z-index: 3;
    background-color:brown;
    width: 86em;
    margin-left:-1em;
    position: fixed;
    margin-top: -4em;

  
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
      window.location.href = "https://divin-angapay.herokuapp.com/";
    },
    sendEmail(e) {
      try {
        emailjs.sendForm('service_gzmdtee', 'template_jchjpzk', e.target,
        'user_TYivqMiAqi5wfwWo2zOAC', {
          name: this.name,
          email: this.email,
          message: this.message
        })

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