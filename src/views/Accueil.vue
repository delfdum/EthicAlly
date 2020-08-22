<template>
  <div>
        <h4>Titre Produits</h4>
        <div class="products">
            <div class="products-div" v-for="product in products" :key="product.id_product">
              <CarteProduit :product="product"/>
            </div>
        </div>

        <h4>Nos artisans du moment</h4>
        <div class="products">
            <div class="products-div" v-for="artisan in artisans" :key="artisan.id">
              <div v-if="artisan.firstPage" >
                  <CarteArtisan :artisan="artisan"/>
              </div>
            </div>
        </div>

    
   
  </div>
</template>

<script>
import CarteProduit from "@/components/CarteProduit";
import {products as productsFromData} from "@/data.js";
import CarteArtisan from "@/components/CarteArtisan";
import {artisans as artisansFromData} from "@/data.js";

export default {
  name: 'Accueil, Artisans',

  components:
    { CarteProduit, CarteArtisan },

  data() {
     return {
      artisans : artisansFromData, 
      products: productsFromData
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
  }
 }

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .products-div h4, .artisans-div h4, .engagements-div h4, .artisan-highlight h4 {
    font-size: 3rem;
}
}








</style>
