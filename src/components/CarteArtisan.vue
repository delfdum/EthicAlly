<template>
  <div class="artisan">
    <h1>{{artisan.name}}</h1>
    <h2>{{artisan.presentation}}</h2>
    <!-- <h3>Crée par {{artisan[artisan.artisan_id]}}</h3> -->
    <h4>{{artisan.origine}}</h4>

    <button @click="voirProjet(artisan.id)">Voir ce projet en détail</button>
 
    </div>
</template>

<script>
export default {
    name: "CarteArtisan",

    props: ['artisan'],

    methods: {
    voirProjet(identifiant) {
      this.$router.push({ path: `/artisandetails/${identifiant}` });
    }

  }


}
</script>

<style scoped>

.artisans-div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.artisans {
  align-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.artisan {
  background-color: rgb(240, 220, 240);
  width: 18vw;
}

.artisans-div h4{
  margin-bottom: 2rem;
  margin-top: 1rem;
  text-align: center;
}

  .artisans {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

    .artisan {

    width: 47vw;
  }

</style>
