<template lang="html">
  <div class="">
    <div class="artisan-ensemble" v-for="artisanSelectionne in artisan" :key="artisanSelectionne.id">
      <h3>{{ artisanSelectionne.name}}</h3>
      <img :src='artisanSelectionne.photo'/>
      <p> Présentation:{{ artisanSelectionne.presentation}}</p>
    </div>
    <h2> Produits de cet artisan: </h2>
     <div class="products">
        <div class="products-div" v-for="product in produitsArtisan" :key="product.id">
          <CarteProduit :product="product"/>
        </div>
      </div>
  </div>
</template>
<script>
import CarteProduit from "@/components/CarteProduit";
export default {
  name: "ArtisanDetails",
  components: { CarteProduit },
  data() {
    return {
      artisan: "",
      produitsArtisan: "",
    };
  },
  mounted() {
      const axios = require("axios");
      axios.get(`http://localhost:3000/artisan/${this.$route.params.id}`)
      .then(response => (this.artisan = response.data));
//PAS TRES SURE ENCORE DONC TU PEUX COMMENTER POUR VOIR SI LE RESTE FONCTIONNE:
      axios.get(`http://localhost:3000/produitsArtisan/${this.$route.params.id}`)
      .then(response => (this.produitsArtisan = response.data));
  },
};
</script>
<style lang="css" scoped>

.artisan-ensemble {
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-bottom: 3rem;
    min-height: 90vh;
    width: 90vw;
  }

  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .products-div {
    width: 25vw;
  }
</style>
