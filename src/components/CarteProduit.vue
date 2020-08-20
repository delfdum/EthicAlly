<template>
  <div class="product">
          <h1>{{entreprise.title}}</h1>
    <h3>Crée par {{entreprise.etpName}}</h3>
    <!-- <img src="" alt="Une photo du porteur du projet et le logo de l'entreprise"> -->
    <h4>{{entreprise.type}}</h4>
    <p>{{entreprise.shortPrez}}</p>
    <p>{{entreprise.needs}} €</p>

    <button @click="voirProjet(entreprise.id)">Voir ce projet en détail</button>
    <!-- <router-link to="/SinglePage">
      <button>Voir ce projet en détail</button>
    </router-link> -->
    </div>
</template>

<script>
export default {
    name: "CarteProduit",

    props: ['entreprise'],

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