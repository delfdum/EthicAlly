<template>
  <div>
    <div class="presentation">
      <div class="presentation-text">
        <h2>EthicAlly, qu'est-<br>ce que c'est ?</h2>
        <p>Sensible au monde et à ceux qui l’habitent.  Ethically est l’alliance du bien et du bien.
        Un espace  où les artisans de l’éthique vous présentent leurs créations et leurs engagements écologiques et humains.
        Parce qu'intégrer l’éthique dans notre mode de vie ; c’est intégrer l’éthique dans notre mode de consommer.</p>
        <a href="#">En savoir plus</a>
      </div>
    </div>
    <div class="accueil-div">
      <h2>L'artisan du mois</h2>
      <div class="artisan-du-mois">
        <div class="portrait" v-for="artisan in artisans" :key="artisan.id" v-if="artisan.portrait">
            <CarteArtisan :artisan="artisan"/>
        </div>
        <div class="products">
          <div class="product-div" v-for="product in products" :key="product.id_product" v-if="product.produit_du_mois">
            <CarteProduit :product="product"/>
          </div>
        </div>
      </div>
    </div>
    <div class="accueil-div">
      <h2>Titre Produits</h2>
      <div class="products">
        <div class="product-div" v-for="product in products" :key="product.id_product">
          <CarteProduit :product="product"/>
        </div>
      </div>
    </div>
    <div class="accueil-div">
      <h2>Nos artisans du moment</h2>
      <div class="artisans">
        <div class="artisan-div" v-for="artisan in artisans" :key="artisan.id" v-if="artisan.firstPage">
          <div>
            <CarteArtisan :artisan="artisan"/>
          </div>
        </div>
      </div>
    </div>
    <div class="engagements-div">
      <h2>Nos engagements</h2>
      <div class="engagements">
        <div class="engagement">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis.</p>
        </div>
        <div class="engagement">
          <p>I ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="engagement">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div class="engagement">
          <p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
  // name: 'Accueil, Artisans',

  components:
    { CarteProduit, CarteArtisan },

  data() {
     return {
      artisans : artisansFromData,
      products: productsFromData
    };
  },
  // computed: {
  //   products: function() {
  //     return productsFromData.filter(product => {
  //       return product.artisan_id === parseInt(this., 10);
  //     });
  //   }
  // },
}

</script >

<style lang="css" scoped>

.presentation {
  background-image: url("../../assets/images/sculpture.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 6rem;
  padding: 2rem 4rem;
}

.presentation h2 {
  font-size: 4rem;
}

.presentation-text {
  background-color: rgba(255, 255, 255, 0.4);
  font-size: 1.3rem;
  padding: 1rem;
  width: 40vw;
}

.presentation a {
  color: #006845;
  font-weight: 600;
}

.artisan-du-mois {
  display: flex;
}

.portrait .artisan {
  background-image: url("../../assets/images/portrait-1.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  margin: 1rem;
  padding: 26rem 1rem 1rem 1rem;
  width: 46vw;
}

.portrait {
  vertical-align:middle;
}

.products {
  align-content: space-around;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.product-div {
  width: 25vw;
}

.artisans {
  align-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.artisan-div {
  width: 25vw;
}

.engagements-div {
  background-color: rgb(250, 250, 230);
  padding: 1rem;
}

.engagements {
  align-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.engagement {
  font-size: 1.1rem;
  height: 100%;
  padding: 2rem 1rem;
  text-align: center;
  width: 23vw;
}


 @media only screen and (max-device-width: 1024px) {
   .presentation, .accueil-div, .engagements {
     margin: auto;
   }

   .presentation {
     background-position: center;
     background-repeat: no-repeat;
     background-size: contain;
     padding: 2rem 4rem;
   }

   .presentation h2 {
     font-size: 4rem;
   }

   .presentation-text {
     background-color: rgba(255, 255, 255, 0.4);
     font-size: 1.3rem;
     padding: 1rem;
     width: 84vw;
   }

   .artisan-du-mois {
     flex-direction: column;
   }

   .portrait .artisan {
     background-size: cover;
     height: 69vh;
     padding: 1rem;
     padding-top: 29rem;
     width: 95vw;
   }

   .product-div, .artisan-div {
     width: 48vw;
   }

   .engagements-div {
     padding: 2rem 1rem 1rem 1rem;
   }

   .engagements {
     flex-direction: column;
     margin-top: 1rem;
   }

   .engagement {
     padding: 0.5rem 1rem;
     width: 95vw;
   }

 }

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {

  .accueil-div {
    margin-top: 1rem;
  }

  .product-div, .artisan-div {
    width: 100vw;
  }

  .presentation {
    padding: 0.6rem;
    width: 100%;
  }

  .presentation-text {
    background-color: rgba(255, 255, 255, 0.2);
    margin: auto;
    width: 100%;
  }

  .presentation-text h2 {
    font-size: 2rem;
  }

  .presentation-text p {
    font-size: 1.1rem;
  }

  .portrait .artisan {
    background-size: contain;
    height: 43.5vh;
    padding: 1rem;
    padding-top: 5rem;
    width: 94vw;
  }





}

</style>
