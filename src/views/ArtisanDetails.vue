

<template lang="html">
  <div class="">
      <Navbar/>

    <h3>Crée par {{ artisanSelectionne.name}}</h3>
      <p> Présentation:{{ artisanSelectionne.presentation}}</p>
    
    <h2> Produits de cet artisan: </h2>

     <div class="products">
            <div class="products-div" v-for="product in products" :key="product.id_product">
              <CarteProduit :product="product"/>
            </div>
        </div>

    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarteProduit from "@/components/CarteProduit";
import {products as productsFromData} from "@/data.js";
import {artisans as artisansFromData} from "@/data.js";

export default {
    name: 'ArtisanDetails',
    components: { Navbar, Footer, CarteProduit },

   data() {
    return {
      artisans: artisansFromData,
      idArtisanSelectionne: 0,
      artisanSelectionne: {},
      // products: productsFromData
 
        products : productsFromData.filter(product =>{
          // console.log(idArtisanSelectionne);
          return product.artisan_id === 2;
        }),
    };
  },

  mounted() {
    // On récupère le params id (qui est dans l'url) grâce à l'objet $route
    this.idArtisanSelectionne = this.$route.params.id;

    // On sélectionne l'utilisateur qui a le même id que le params récupéré dans $route
    this.artisanSelectionne = this.artisans.find(
      (artisan) => artisan.id == this.idArtisanSelectionne
    );
  },
};

</script>


<style lang="css" scoped>
</style>
