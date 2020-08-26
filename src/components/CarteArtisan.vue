<template>
  <div class="artisan">
    <h3>{{artisan.name}}</h3>
    <h4>{{artisan.presentation}}</h4>
    <h4>{{artisan.origine}}</h4>

    <button @click="voirArtisan(artisan.id)">Voir le travail de cet artisan</button>

  </div>
</template>

<script>
export default {
    name: "CarteArtisan",

    props: ['artisan'],

    methods: {
      voirArtisan(identifiant) {
        this.$router.push({ path: `/artisandetails/${identifiant}` });
      }
    }
}
</script>

<style scoped>

  .artisan {
    background-color: rgb(240, 220, 240);
    /* background-image: url("product.photo"); */
    margin: 1rem;
    padding: 4rem 1rem 4rem 1rem;
  }

  .artisan h4, .artisan h3 {
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
    padding: 0.5rem 1.6rem 0.4rem 1.6rem;
    text-align: center;
  }

  @media only screen and (max-device-width: 1024px) {
    button {
      font-size: 1.5rem;
    }

  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    button {
      font-size: 1.3rem;
    }

  }



</style>
