<template>
  <div>
    <h2>Les produits</h2>
    <div class="products-group">
      <div class="product-div" v-for="product in products" :key="product.id">
        <CarteProduit :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>

  import CarteProduit from "@/components/CarteProduit";
  import {products as productsFromData} from "@/data.js";

  export default {
      name: 'Produits',
      components:
      { CarteProduit },
      data() {
          return {
            products : productsFromData,
          }
      }

}
</script>

<style lang="css" >

  .products-group {
    align-content: flex-start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .product-div {
    width: 25vw;
  }


  @media only screen and (max-device-width: 1024px) {
    .product-div {
      width: 48vw;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    .product-div {
      width: 98vw;
    }
  }
</style>
