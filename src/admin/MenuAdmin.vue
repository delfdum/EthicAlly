<template>
  <div>
    <h2>Bienvenue dans la partie administrative du site</h2>

    <h2>Les artisans</h2>
      <button @click="ajoutArtisan()">Ajouter un artisan</button>
      <button @click="changeArtisan()">Modifier un artisan</button>
      <button @click="supprimerArtisan()">Supprimer un artisan</button>

    <h2>Les produits</h2>
      <button @click="ajoutProduit()">Ajouter un produit</button>
      <button @click="changeProduit()">Modifier un produit</button>
      <button @click="supprimerProduit()">Supprimer un produit</button>
       
  </div>
</template>

<script>

export default {
  name: 'MenuAdmin',

    methods: {
      ajoutArtisan() {
        this.$router.push({ path: `/nouvelartisan` });
      },
      changeArtisan() {
        this.$router.push({ path: `/modifartisans` });
      },
      supprimerArtisan() {
        this.$router.push({ path: `/deleteartisan` });
      },

      ajoutProduit() {
        this.$router.push({ path: `/nouveauproduit` });
      },
      changeProduit() {
        this.$router.push({ path: `/modifproduits` });
      },
      supprimerProduit() {
        this.$router.push({ path: `/deleteproduit` });
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
