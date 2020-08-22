<template>
  <div>
        <h4>Titre Produits</h4>
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

export default {
  name: 'Accueil',

  components:
    { CarteProduit },

  data() {
      return {
        products : productsFromData.filter(product =>{
          return product.artisan_id === 2;
        }),

      };
  },
    methods: {
    voirProjet(identifiant) {
      this.$router.push({ path: `/ProduitDetails/${identifiant}` });
    }

  }

}
</script >

<style lang="scss">

  .products-div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.products {
  align-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
}

.products-div h4, .artisans-div h4, .engagements-div h4 {
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-align: center;
}



 @media only screen and (max-device-width: 1024px) {

    .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 80vh;
  }
 }

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 80vh;
  }
  .products-div h4, .artisans-div h4, .engagements-div h4, .artisan-highlight h4 {
    font-size: 3rem;
}
}








</style>
