<template>


  <div class="about">
  <div>
    <Menue id="menue"/>
  
  </div>
  <div id="descript">
<section>
  <h2 class="title">Formation</h2>
  <h3>Année : 2019-2021 </h3>
  
  <p>Master mathématique et informatique appliqués  <br> 
     aux sciences humaines et sociales.
   <br> parcours informatique et science sociale à l'université  de Grenoble-Alpes</p>
  <h3>Année : 2016-2019 </h3>
   <p>Licence science du langage<br> 
    
   <br>parcours analyse des discours  à l'université de Franche-compte</p>
   
</section>
<section>
<h2>Expériences professionnelles</h2>
 <p>Actuellement développeur c# stagiaire  à la direction des systèmes d'informations de l'agglomeration de grand Chambéry et à la ville de Chambéry.<br>
 </p>
 <p>Stage réalisé dans le cadre du dispositif piton de  l'Université Savoie Mont Blanc </p>

 
 

</section>
<section id="competences">
<h2>Compétences techiniques</h2>
  <h3>Langages</h3>
  <ul>
  <li>Java</li>
  <li>C#</li>
  <li>Javascript</li>
  <li>Typescript</li>
  <li>SQL</li>
   </ul>
   <h3>Framework</h3>
   <ul>
   <li>Asp.net MVC</li>
   <li>Vue js</li>
   </ul>
   <h3>SGBD</h3>
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
#menue{
  height: 3em;
  
  
    z-index: 3;
    background-color:  brown;
    width: 86em;
    margin-left:-1em;
    position: fixed;
    margin-top:-6em;
   
 
}
#descript{

  margin-top:6em;
}
section{
  float: left;
  margin-left: 3em;
  background-color:rgba(238, 249, 255, 0.89);;
  height: 400px;
  width: 500px;
  margin-bottom: 2em;
  
  
}
#competences{
   height: 465px;
}
p,ul{
  font-size: 20px;
}
h2{
  color:brown;
}
</style>