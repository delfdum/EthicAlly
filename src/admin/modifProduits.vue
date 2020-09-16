<template>
  <div>
    <h2>Nos produits</h2>
     <button @click="retourMenu()">retour au menu</button>
        <div class="artisans-group">
            <div class="product-div" v-for="product in produits" :key="product.id">
              <h3>{{product.name}}</h3>
              <button @click="changeProduct(product.id)">Modifier ce produit</button>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'modifProduits',
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
      
      changeProduct(identifiant) {
        this.$router.push({ path: `/modifierProduit/${identifiant}` });
      }
    }
 };

</script >

<style lang="scss">

.artisans-group {
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.artisan-div {
  width: 25vw;
}


 @media only screen and (max-device-width: 1024px) {

  .artisans {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  }

  .artisans-groupe {

  }

  .artisan-div {
    width: 48vw;
  }
 }

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .artisans {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .artisan-div {
    width: 98vw;
  }

  .artisans-div h4 {
    font-size: 3rem;
  }
}

</style>
