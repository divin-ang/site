<template>
    <div >
    
    <transition-group name="fade" tag="div" >
      <div v-for="i in [currentIndex]" :key="i" class="image-div" >
       
        <p v-html="currentImg.text" id="image-label">
        
        </p>
         <img :src="currentImg.image"  />
      
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Précédent</a>
    <a class="next" @click="next" href="#">&#10095; Suivant</a>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        {image:require("../assets/laptop1.jpg"),text:"Je suis étudiant à L'université de <a href='https://www.univ-grenoble-alpes.fr/'>Grenoble-Alpes</a>  <b<br>  en master  Mathématique  <br>et informatique  appliqués  aux sciences humaines et sociales <a href='http://formations.univ-grenoble-alpes.fr/fr/catalogue/master-XB/sciences-humaines-et-sociales-SHS/master-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales-miashs-program-master-mathematiques-informatique-appliquees-et-sciences-humaines-et-sociales.html'>(Miashs)</a>"
        },
        {image:require("../assets/laptop2.jpg"),text:"Dépuis Février 2021 j'éffectue un stage en tant que  Développeur Java  à  la direction des systèmes d'information <br>  de l'agglomération du Grand Chambéry<br>"},

        {image:require("../assets/laptop2.jpg"),text:"Je realise mon stage  dans le cadre du <a href='https://www.piton.univ-smb.fr/'>dispositif  piton </a>de l'université Savoie Mont blanc"}
       

       
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 10000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return  this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
.image-div{
 position: relative;
 text-align: center;
 width:100%;
 
 

}
.image-div{
filter: brightness(90%);
}
#image-label{
  position: absolute;
  
   top: 200px; 
   left: 0; 
   width: 100%; 
   font-size: 30px;
  color: white;
  font:bold;
  

}

</style>