<template>
    <div>
         <header>
      <div v-if="covidDisplay" class="covid-banner">
        <p>Nos livraisons pendant la période covid-19</p>
        <button type="button" class="acceptbutton" @click.prevent="closeBanner"><i class="fas fa-times"></i></button>
      </div>
      <div class="desktop-header">
        <div class="logo-and-menu">
          <div>
            <router-link :to="'/accueil'">
              <img class="logo" src="../assets/logo1.png" alt="logo">
            </router-link>           
          </div>
          <div class="menu">
            <nav>
              <ul>
                <li> <router-link :to="'/artisans'">NOS ARTISANS </router-link> </li>
                <li> <router-link :to="'/allproduits'">NOS PRODUITS </router-link> </li>
                <li> <router-link :to="'/nosEngagements'">NOS ENGAGEMENTS </router-link> </li>
                <li>LE MEDIA</li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="search-bar">
          <div class="magnifier">

            <button type="button" name="button" class="searchbar-button" @click.prevent="openSearch" v-if="openButtonDisplay"><i class="fas fa-search"></i></button>


            <button type="button" class="close-button" @click.prevent="closeSearch" v-if="closeButtonDisplay"><i class="fas fa-times"></i></button>

          </div>
        </div>
      </div>
      <div class="smartphone-header">
        <div class="burger-menu">
          <button class="burger-open" type="button" name="button" @click.prevent="openSmartphoneMenu" v-if="burgerDisplay"><i class="fas fa-bars"></i></button>
        </div>
        <div class="smartphone-menu" v-if="smartphoneMenuDisplay">
          <button class="burger-close" type="button" name="button" @click.prevent="closeSmartphoneMenu" v-if="crossDisplay"><i class="fas fa-times"></i></button>
          <nav>
              <ul>
                <li> <router-link :to="'/artisans'">NOS ARTISANS </router-link> </li>
                <li> <router-link :to="'/allproduits'">NOS PRODUITS </router-link> </li>
                <li> <router-link :to="'/nosEngagements'">NOS ENGAGEMENTS </router-link> </li>
                <li>LE MEDIA</li>
              </ul>
            </nav>
        </div>
        <div class="title">
          <h1>Ethically</h1>
        </div>
        <div class="search-bar">

        </div>
      </div>
    </header>

    <main>
      <div v-if="searchBar" class="pop-up-searchbar-container">
        <div class="pop-up-searchbar">
          <label for="searchbar">Tapez votre recherche ...</label><input type="text" name="searchbar" value="" placeholder="recherche ..."><button class="research-button" type="button" name="button"><i class="fas fa-search"></i></button>
      </div>
      </div>
    </main>

    </div>
</template>

<script>
export default {
    name: "Navbar",

    data() {
      return {
        covidDisplay: true,
        searchBar: false,
        openButtonDisplay: true,
        closeButtonDisplay: false,
        smartphoneMenuDisplay: false,
        crossDisplay: false,
        burgerDisplay: true,
      }
    },

    methods: {
      closeBanner() {
        this.covidDisplay = false;
      },

      openSearch() {
        this.searchBar = true;
        this.closeButtonDisplay = true;
        this.openButtonDisplay = false;
      },

      closeSearch() {
        this.searchBar = false;
        this.closeButtonDisplay = false;
        this.openButtonDisplay = true;
      },

      openSmartphoneMenu() {
        this.smartphoneMenuDisplay = true;
        this.crossDisplay = true;
        this.burgerDisplay = false;
      },

      closeSmartphoneMenu() {
        this.smartphoneMenuDisplay = false;
        this.crossDisplay = false;
        this.burgerDisplay = true;
      },
    }

}
</script>

<style lang="scss" scoped >
/* DIVISIONS */


header {
  display: flex;
  flex-direction: column;
}

.covid-banner {
  align-items: center;
  background-color: gold;
  display: flex;
  justify-content: center;
  text-align: center;
}

.desktop-header {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.smartphone-header {
  display: none;
}

.logo-and-menu {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.menu {
}

header .menu {
  width: 40vw;
}

.search-bar {
  margin-right: 1rem;
}

.pop-up-searchbar-container {
  align-items: center;
  display: flex;
  justify-content: center;
}

.pop-up-searchbar {
  background-color: white;
  padding: 1rem;
  position: absolute;
}


/* TITLES */


/* TEXT */

.covid-banner p {
  margin-bottom: 0rem;
  text-align: center;
}


/* NAVS & LISTS */

.menu ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0rem;
  padding-left: 0rem;
  width: 100%;
}

.menu li {
  list-style-type: none;
}

.menu li:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left:	0;
  background-color: #1a535c;
  visibility: hidden;
  transform: scaleX(0);
  transition: all .3s ease-in-out;
}

.menu li:hover:before {
  visibility: visible;
  transform: scaleX(1);
}

/* INPUTS */

.pop-up-searchbar input {
  border: 0rem;
  border-bottom: 1mm ridge rgb(220, 220, 220, .3);
}

/* BUTTONS */

.covid-banner button {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin-left: 2rem;
}

.close-button,
.searchbar-button,
.research-button {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  margin-left: 2rem;
}


/* IMG */

.logo {
  max-width: 10vw;
}




/*================= MEDIA QUERIES =================*/

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {

  .desktop-header {
    display: none;
  }

  .smartphone-header {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  .covid-banner p, .covid-banner i {
    font-size: 2rem;
  }

  .burger-menu, .burger-menu-close {
    width: 20vw;
  }

  .search-bar {
    width: 20vw;
  }

  .smartphone-menu {
    margin-top: 2rem;
  }

  h1 {
    font-size: 5rem;
  }

  .burger-open, .burger-close {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    font-size: 4.5rem;
    font-weight: 400;
    margin-left: 2rem;
  }

  .smartphone-menu li {
    font-size: 2rem;
    line-height: 4.5rem;
    list-style-type: none;
  }


}


@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {

  .desktop-header {
    display: none;
  }

  .smartphone-header {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 5rem;
  }

  .covid-banner {
    display: none;
  }

  .smartphone-menu {
    position: absolute;
  }

  h1 {
    font-size: 5rem;
  }

  .burger-open, .burger-close {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    font-size: 8rem;
    margin-left: 2rem;
  }

  .fa-bars, .fa-times {
    font-size: 6rem;
  }


}


</style>
