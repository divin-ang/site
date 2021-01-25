<template>


  <div class="about" :style="{'background-image': 'url(' + require('../assets/laptop1.jpg') + ')'}">
  <div>
    <Menue id="menue"/>
  
  </div>
  <div id="descript" >
<section>
  <h5 >Formation</h5>
 
  
  <p><strong> 2019-2021 </strong> <br> Master mathématique et informatique appliqués  <br> 
     aux sciences humaines et sociales : parcours informatique et science sociale à l'université  de Grenoble-Alpes</p>
 
   <p>  <strong>2016-2019 </strong> <br>  Licence science du langage  à l'université de Franche-compte</p>
   
</section>
<section class="section2">
<h5>Expérience professionnelle</h5>
 <p>Actuellement développeur stagiaire  à la direction des systèmes d'informations de l'agglomeration de grand Chambéry et à la ville de Chambéry.<br>
 </p>
 <p>Stage réalisé dans le cadre du dispositif piton de  l'Université Savoie Mont Blanc </p>

 
 

</section>


<section id="competences">
<h5>Compétences techiniques</h5>
  <p> <strong>Languages</strong></p>
  <ul>
  <li>Java</li>
  <li>C#</li>
  <li>Javascript</li>
  <li>Typescript</li>
  <li>SQL</li>
   </ul>
 <p><strong>Frameworks</strong></p>
   <ul>
   <li>Asp.net MVC</li>
   <li>Vue js</li>
   </ul>
  <p><strong>SGBD</strong></p>
   <ul>
   <li>SQL server</li>
   <li>MySQL</li>
   <li>Mongodb</li>
   </ul>

</section>
  
  </div>

  
  </div>
</template>

<script>
import Menue from '../views/Menue'
export default {
  components:{
    Menue,
  }
  
}
</script>
<style>
#menuee{
    height: 3em;
    z-index: 3;
    background-color:  brown;
    width: 86em;
    margin-left:-1em;
    position: fixed;
    margin-top:-6em;
   
 
}
#descript{

   width: 100%;
   
  
   
}
section{

  margin-left: 5em;
 
  height: 35%;
  width: 45%;
  margin-top: 5em;
  
  
}
.section2{
  
}
.about{
width: 100%;
height:100em;
background-repeat: no-repeat;
background-size: cover;
color:white;

}
#competences{
   height: 40%;
}
p,ul{
  font-size: 17px;
  font: bold;
}
h5{
  color:brown;
}
</style>