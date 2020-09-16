<template>
  <div>
    <h2>Nos produits</h2>
    <button @click="retourMenu()">retour au menu</button>

    <div class="artisans-group">
        <div class="artisan-div" v-for="product in produits" :key="product.id">
          <h1>{{product.name}}</h1>
           <button type="button" @click="deleteProduit(product.id)">supprimer</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteProduit',

  data() {
      return {
        produits : "",
      }
    },
  mounted() {
     const axios = require("axios");
     axios.get('http://localhost:3000/produits')
     .then(response => (this.produits = response.data))
   },
 
  methods: {   
      retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },
 
      deleteProduit(id) {
        const axios = require('axios');
        axios.delete(`http://localhost:3000/produitdelete/${id}`)
        .then((res) => {
          alert ('êtes-vous certain(e) de supprimer ce produit?');
          //pour rafraichier la page sans utilsateur recharge sa page
           axios.get('http://localhost:3000/produits')
          .then(response => (this.produits = response.data))
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