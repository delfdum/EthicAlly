<template>
  <div class="">

<!-- FAIRE CSS -->

    <!-- <div class="artisan-div" v-for="artisan in artisans" :key="artisan.id"> -->
    <h2>Modifier un artisan</h2>
    <form>
        <label for="">id</label>
        <input type="text" v-model="id"/><br><br>

        <label for="">name</label>
        <input type="text" v-model="name"/><br><br>

        <label for="presentation">présentation</label>
        <textarea v-model="presentation" rows="15" cols="55"></textarea> <br><br>
 

        
        <!-- photo PARTIE ALIX-->

        <label for="origine">origine</label>
        <input type="text" v-model="origine"/><br><br>

        <label for="firstPage">première page</label>
        <input type="text" v-model="firstPage"/><br><br>

        <label for="artisanDuMois">artisan du mois</label>
        <input type="text" v-model="artisanDuMois"/><br><br>

        <button type="button" @click="putArtisan()">Envoyer</button>
    </form>
     <!-- </div> -->
 <!--la réponse du formulaire ci-dessous si ça a été validé:  -->
    <p v-if="success">L'artisan a bien été modifié</p>
    
  </div>
</template>

<script>
export default {
  name: "ModifierArtisan",
  data() {
    return {
    artisans: "",
        id: "",
       name: "",
       presentation: "",
       thumbnail: "",
       photo: "",
       origine: "",
       firstPage: false,
       artisanDuMois: false,
       success: false,
    }
  },

    mounted() {
     const axios = require("axios");
     axios.get('http://localhost:3000/artisans')
     .then(response => (this.artisans = response.data))
   },

  methods: {
    putArtisan() {
        const axios = require('axios');
        axios.put(`http://localhost:3000/changeArtisan/${this.id}`, {
          name: this.name,
          presentation: this.presentation,
          thumbnail: this.thumbnail,
          photo: this.photo,
          origine: this.origine,
          firstPage: this.firstPage,
          artisanDuMois: this.artisanDuMois,
      })
      .then(() => {
        this.name = "";
        this.presentation = "";
        this.thumbnail = "";
        this.photo = "";
        this.origine = "";
        this.firstPage = "";
        this.artisanDuMois = "";
        this.success = true;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>
