<template>
    <div>
     
    <div id="menu">
     <Menue />
    </div>
   <div id="description">
       <textra :data='words' :timer="6"  :infinite='true' filter="left-right" />
   </div>
   

    </div>
</template>
<script>
import Menue from "./Menue"

export default {
    components:{
        Menue,

    },
  data () {
    return {
      words: ["<div id='un'><br><br><br>Je suis étudiant à L'université de <a href='https://www.univ-grenoble-alpes.fr/'>Grenoble-Alpes</a>  <br> <br><br>  En master  Mathématique et informatique appliqués <br> aux sciences humaines et sociales <a href='http://formations.univ-grenoble-alpes.fr/fr/catalogue/master-XB/sciences-humaines-et-sociales-SHS/master-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales-miashs-program-master-mathematiques-informatique-appliquees-et-sciences-humaines-et-sociales.html'>(Miashs)</a></div>",
      "<br><br><br>Dépuis Février 2021 Développeur Java stagiaire <br><br> depuis  février 2021 à  la direction des systèmes d'information <br> de la  Ville de Chambéry et de l'agglomération du Grand Chambéry<br>","<br><br><br>Je realise mon stage  dans le cadre du <a href='https://www.piton.univ-smb.fr/'>dispositif  piton </a>de l'université Savoiemont blanc"]
    }
  }

    }
    

</script>


<style >



#description{
 margin-top:4.8em;

 background-color:rgba(238, 249, 255, 0.89);


font-size: 20px;
 margin-left: 13em;
width: 500px;
height: 500px;



   
}
a{
    text-decoration: none;
    color:orange;
}
#menu{
height: 3em;
  
  
    z-index: 3;
    background-color:  brown;
    width: 86em;
    margin-left:-1em;
    position: fixed;
    margin-top:-6em;

  
}
#un{
  background-color: rgba(238, 249, 255, 0);;
}
</style>