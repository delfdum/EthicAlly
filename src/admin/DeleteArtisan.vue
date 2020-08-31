<template>
  <div>
    <h2>Nos artisans</h2>
<!-- FAIRE CSS -->
    <div class="artisans-group">
        <div class="artisan-div" v-for="artisan in artisans" :key="artisan.id">
          <h1>{{artisan.name}}</h1>
           <button type="button" @click="deleteArtisan(artisan.id)">supprimer</button>
<!-- TROUVER L ACTION POUR QUE UTILISATEUR SOIT SUR DE SUPPRIMER, FAIRE UNE 2e VALIDATION OU UN EFENETRE ALERT "ETES VOUS SUR DE SUPPRIMER" -->
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'DeleteArtisan',

  data() {
      return {
        artisans : "",
      }
    },
  mounted() {
     const axios = require("axios");
     axios.get('http://localhost:3000/artisans')
     .then(response => (this.artisans = response.data))
   },
 
  methods: {
 
    deleteArtisan(id) {
        const axios = require('axios');
 //on met les ` qd on mélange des valeurs et du js
        axios.delete(`http://localhost:3000/artisandelete/${id}`)
        .then((res) => {
          alert ('l\' artisan a été supprimé');
          //pour rafraichier la page sans utilsateur recharge sa page
           axios.get('http://localhost:3000/artisans')
          .then(response => (this.artisans = response.data))
          console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }) 
    }
  }
}
</script>
 
<style scoped>

 
  .chaqueCarte {
    padding: 6vW;
    background-color: pink ;
    margin: auto;
    margin-bottom: 5vh;
    margin-top: 5vh;
    width: 300px;
    height: 400px;
  }

button {
  padding: 2vh 2vw;
  background-color: yellow;
  border: solid 1px yellow;
}
 
.bold {
  font-weight: bold;
}
 
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
 
</style>