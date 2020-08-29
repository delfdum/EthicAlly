<template lang="html">
  <div class="product">
    <div v-for="produitSelectionne in produit" :key="produitSelectionne.id">

    <h2>{{produitSelectionne.name}}</h2>

<!-- A FAIRE: METTRE NOM DE L'ARTISAN -->
    <h3>Crée par {{produitSelectionne.artisan_id}}</h3>
    <img :src="produitSelectionne.photo" :alt="produitSelectionne.name">
    <p>{{produitSelectionne.longPrez}}</p>
    <ul>
      <li>{{produitSelectionne.dimensions}}</li>
      <li>{{produitSelectionne.materials}}</li>
      <li>{{produitSelectionne.origine}}</li>
    </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ProduitDetails',
    
data() {
    return {
      produit: "",
    };
  },
  mounted() {
      const axios = require("axios");
      axios.get(`http://localhost:3000/produit/${this.$route.params.id}`)
      .then(response => (this.produit = response.data));
  },
  };

</script>


<style lang="css" scoped>
  .product {
    margin: auto;
    width: 80vw;
  }

  .product p {
    text-align: left;
  }

  .product li {
    list-style-type: none;
    text-align: left;
  }

</style>
