<template>
  <div>
    <h2>Nos artisans</h2>
    <button @click="retourMenu()">retour au menu</button>

    <div class="artisans-group">
        <div class="artisan-div" v-for="artisan in artisans" :key="artisan.id">
           <h3>{{artisan.name}}</h3>
           <button @click="changeArtisan(artisan.id)">Modifier cet artisan</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modifartisans',

  data() {
      return {
        artisans : "",
      }
    },
  mounted() {
     const axios = require("axios");
     axios.get('http://localhost:3000/artisans')
     .then(response => (this.artisans = response.data))
   },

  methods: {
    retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },
    changeArtisan(identifiant) {
        this.$router.push({ path: `/modifierArtisan/${identifiant}` });
      }
    }
 };

</script >

<style lang="scss">

.artisans-group {
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.artisan-div {
  width: 25vw;
}


 @media only screen and (max-device-width: 1024px) {

  .artisans {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  }

  .artisans-groupe {

  }

  .artisan-div {
    width: 48vw;
  }
 }

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .artisans {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .artisan-div {
    width: 98vw;
  }

  .artisans-div h4 {
    font-size: 3rem;
  }
}

</style>
