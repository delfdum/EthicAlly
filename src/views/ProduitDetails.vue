<template lang="html">
  <div class="product">
    <!-- A FAIRE: METTRE NOM DE L'ARTISAN -->
<div  v-for="artisanSelectionne in artisanDuProduit" :key="artisanSelectionne.id">
      <h3>{{ artisanSelectionne.nom}}</h3>
</div>

<hr>
    <div v-for="produitSelectionne in produit" :key="produitSelectionne.id">

    <h2>{{produitSelectionne.name}}</h2>


    <!-- <h3>Crée par {{produitSelectionne.artisan_id}}</h3> -->
  
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
      artisanDuProduit: "",
    };
  },
  mounted() {
      const axios = require("axios");
      axios.get(`http://localhost:3000/produit/${this.$route.params.id}`)
      .then(response => (this.produit = response.data));
       axios.get(`http://localhost:3000/artisanDuProduit/${this.$route.params.id}`)
      .then(response => (this.artisanDuProduit= response.data));
     
  },
  };

</script>


<style lang="css" scoped>
h3{
  color:red,
}

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
