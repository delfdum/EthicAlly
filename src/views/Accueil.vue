<template>
  <div>
      <Navbar/>
 

        <h4>Titre Produits</h4>
        <div class="products">
            <div class="products-div" v-for="entreprise in entreprises" :key="entreprise.id">
              <CarteProduit :entreprise="entreprise"/>
            </div>
        </div>
   


    
  
     

      <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarteProduit from "@/components/CarteProduit";
import {entreprises} from "@/data.js";



export default {
  name: 'Accueil',

  components:
    { Navbar, Footer, CarteProduit },

  data() {
      return {
        entreprises : entreprises,
 
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