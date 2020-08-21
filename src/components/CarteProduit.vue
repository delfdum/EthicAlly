<template>
  <div class="product">
    <h1>{{product.name}}</h1>
    <h2>{{product.category}}</h2>
    <!-- <h3>Crée par {{artisan[product.artisan_id]}}</h3> -->
    <h4>{{product.type}}</h4>

    <button @click="voirProjet(product.id_product)">Voir ce projet en détail</button>
    <!-- <router-link to="/SinglePage">
      <button>Voir ce projet en détail</button>
    </router-link> -->
    </div>
</template>

<script>
export default {
    name: "CarteProduit",

    props: ['product'],

}
</script>

<style scoped>

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
  height: 85vh;
  justify-content: space-between;
}

.product {
  background-color: rgb(240, 220, 240);
  height: 48%;
  width: 18vw;
}

.products-div h4{
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-align: center;
}

  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

    .product {
    height: 15vh;
    width: 47vw;
  }

</style>
