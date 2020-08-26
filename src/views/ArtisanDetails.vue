<template lang="html">
  <div class="">

    <h3>Crée par {{ artisanSelectionne.name}}</h3>
    <p> Présentation:{{ artisanSelectionne.presentation}}</p>

    <h2> Produits de cet artisan: </h2>

     <div class="products">
        <div class="products-div" v-for="product in products" :key="product.id_product">
          <CarteProduit :product="product"/>
        </div>
      </div>

  </div>
</template>

<script>
import CarteProduit from "@/components/CarteProduit";
import {products as productsFromData} from "@/data.js";
import {artisans as artisansFromData} from "@/data.js";

export default {
  name: "ArtisanDetails",
  components: { CarteProduit },
  data() {
    return {
      artisans: artisansFromData,
      idArtisanSelectionne: 0,
      artisanSelectionne: {},
    };
  },
  computed: {
    products: function() {
      return productsFromData.filter(product => {
        // Ici on utilise parseInt car this.idArtisanSelectionne est de type "string"
        // alors que product.artisan_id est de type "number".
        // Donc pour convertir this.idArtisanSelectionne on utilise la méthode parseInt.
        // Le deuxième paramètre de parseInt dit qu'on utilise une base 10 (c'est pas important de le savoir)
        return product.artisan_id === parseInt(this.idArtisanSelectionne, 10);
      });
    }
  },
  mounted() {
    // On récupère le params id (qui est dans l'url) grâce à l'objet $route
    this.idArtisanSelectionne = this.$route.params.id;
    // On sélectionne l'utilisateur qui a le même id que le params récupéré dans $route
    this.artisanSelectionne = this.artisans.find(
      artisan => artisan.id == this.idArtisanSelectionne
    );
  }
};
</script>

<style lang="css" scoped>

  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .products-div {
    width: 25vw;
  }
</style>
