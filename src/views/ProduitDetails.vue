<template lang="html">
  <div class="product">
    <h2>{{produitSelectionne.name}}</h2>
    <h3>Crée par {{artisanSelectionne.name}}</h3>
    <img :src="produitSelectionne.photo" :alt="produitSelectionne.name">
    <p>{{produitSelectionne.longPrez}}</p>
    <ul>
      <li>{{produitSelectionne.dimensions}}</li>
      <li>{{produitSelectionne.materials}}</li>
      <li>{{produitSelectionne.origine}}</li>
    </ul>
  </div>
</template>

<script>
  import {products} from "@/data.js";
  import {products as productsFromData} from "@/data.js";
  import {artisans as artisansFromData} from "@/data.js";
  export default {
    name: 'ProduitDetails',
    name: 'ArtisanDetails',
    data() {
      return {
        products: productsFromData,
        idProduitSelectionne: 0,
        produitSelectionne: {},
        idArtisanSelectionne: 0,
        artisanSelectionne: {},
      };
    },
  computed: {
    artisans: function() {
      return artisansFromData.filter(artisan => {
        return artisan.id_product === parseInt(this.idProduitSelectionne, 10);
      });
    }
  },

  mounted() {
    // On récupère le params id (qui est dans l'url) grâce à l'objet $route
    this.idProduitSelectionne = this.$route.params.id_product;
    // On sélectionne l'utilisateur qui a le même id que le params récupéré dans $route
    this.produitSelectionne = this.products.find(
      product => product.id_product == this.idProduitSelectionne
      );
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
