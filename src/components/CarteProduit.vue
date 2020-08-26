<template>
  <div class="product">
    <h3>{{product.name}}</h3>
    <h4>{{product.category}}</h4>
    <h4>{{product.type}}</h4>

    <button @click="voirProduit(product.id_product)">Voir ce produit</button>

    </div>
</template>

<script>
export default {
    name: "CarteProduit",

    props: ['product'],

    methods: {
      voirProduit(identifiant) {
        this.$router.push({ path: `/produitdetails/${identifiant}` });
      }
    }

}
</script>

<style scoped>

  .product {
    background-color: rgb(240, 220, 240);
    /* background-image: url("product.photo"); */
    margin: 1rem;
    padding: 4rem 1rem 4rem 1rem;
  }

  .product h4, .product h3 {
    text-shadow: 1px 1px 2px #000000;
    color: rgb(250, 250, 250);
  }

  button {
    background-color: rgba(240, 240, 240);
    border: none;
    border-radius: 1.5rem;
    color: #006845;
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 1rem;
    padding: 0.5rem 1.2rem 0.4rem 1.2rem;
    text-align: center;
  }

  @media only screen and (max-device-width: 1024px) {
    button {
      font-size: 1.5rem;
    }

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {


  }


</style>
