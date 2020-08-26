<template>
  <div>
    <h2>Nos artisans</h2>
    <div class="artisans-group">
        <div class="artisan-div" v-for="artisan in artisans" :key="artisan.id">
          <CarteArtisan :artisan="artisan"/>
        </div>
    </div>
  </div>
</template>

<script>
import CarteArtisan from "@/components/CarteArtisan";
import {artisans as artisansFromData} from "@/data.js";

export default {
  name: 'Artisans',

  components:
    { CarteArtisan },

  data() {
      return {
        artisans : artisansFromData
      }
  }
}

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
