<template>
  <div class="">
    <h2>Ajouter un artisan</h2>
     <button @click="retourMenu()">retour au menu</button>
    <form>
        <label for="">name</label>
        <input type="text" v-model="name"/><br><br>

        <label for="presentation">présentation</label><br>
        <textarea v-model="presentation" rows="15" cols="55"></textarea> <br><br>
 

        
        <!-- photo PARTIE ALIX-->

        <label for="origine">origine</label>
        <input type="text" v-model="origine"/><br><br>

        <!-- <label for="firstPage">première page</label>
        <input type="text" v-model="firstPage"/><br><br> -->

        <label for="firstPage">première page</label>
        <input type="checkbox" value="première page" v-model="firstPage"><br><br>


        <label for="artisanDuMois">artisan du mois</label>
        <!-- <input type="text" v-model="artisanDuMois"/><br><br> -->
        <input type="checkbox" value="artisan du mois" v-model="artisanDuMois"><br><br>

        <button type="button" @click="postArtisan">Envoyer</button>
    </form>
 <!--la réponse du formulaire ci-dessous si ça a été validé:  -->
    <p v-if="success">L'artisan a bien été enregistré</p>
  </div>
</template>

<script>
export default {
  name: "NouvelArtisan",
  data() {
    return {
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
  methods: {
     retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },
      
    postArtisan() {
      const axios = require('axios');
  //dans axios.post{2 arguments 1/ le chemin URL, 2/ le body, c'est les infos qu'on envoie à l'API et c'est toujours un objet}
      axios.post(`http://localhost:3000/artisans/nouveau`, {
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
