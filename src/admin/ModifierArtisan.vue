<template>
  <div class="artisan-form artisans-group">
      <h2>Modifier cet artisan</h2>
       
      <div class="artisan-div" v-for="artisan in artisanSelect" :key="artisan.id">
      <button @click="retourMenu()">retour au menu</button>
     
      <form>

        <label for="">name</label>
        <input type="text" v-model="artisan.name" /><br><br>

        <label for="presentation">présentation</label>
        <textarea v-model="artisan.presentation" rows="15" cols="105" ></textarea> <br><br>

        <label for="origine">origine</label>
        <input type="text" v-model="artisan.origine"/><br><br>

        <label for="firstPage">première page</label>
        <input type="checkbox" v-model="artisan.firstPage"><br><br>

        <label for="artisanDuMois">artisan du mois</label>
        <input type="checkbox" v-model="artisan.artisanDuMois"><br><br>

        <button type="button" @click="putArtisan(artisan)">Envoyer</button>
      </form>

 <!--la réponse du formulaire ci-dessous si ça a été validé:  -->
      <p v-if="success">L'artisan a bien été modifié</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "ModifierArtisan",
  data() {
    return {
       artisanSelect: "", // correspond au tableau get
       success: false
    }
  },

  mounted() {
     const axios = require("axios");
       axios.get(`http://localhost:3000/artisanSelect/${this.$route.params.id}`)
      .then(response => (this.artisanSelect = response.data));
  
   },

  methods: {
     retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },

     putArtisan(artisan) {
        const axios = require('axios');
        axios.put(`http://localhost:3000/changeArtisan/${artisan.id}`, {
          name: artisan.name,
          presentation: artisan.presentation,             
          origine: artisan.origine,
          firstPage: artisan.firstPage,
          artisanDuMois: artisan.artisanDuMois        
      })
      
      .then(() => {
        // this.name = this.artisan.name;
        // this.presentation = this.artisan.presentation;
        // this.thumbnail = "";
        // this.photo = "";
        // this.origine = this.artisan.origine;
        // this.firstPage =this.artisan.firstPage;
        // this.artisanDuMois = this.artisan.artisanDuMois;
        this.success = true;
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(name);
    }
  }
}
</script>

<style>
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
  .artisan-form {
    background-color: rgb(240, 240, 240);
    margin: auto;
    padding: 1rem;
    width: 95vw;
  }
  form {
    margin: auto;
    margin-top: 2rem;
    width: 65%;
  }
  label {
    text-align: left;
    width: 43%;
  }
  input, textarea {
    border: 0px;
    border-radius: 1rem;
    width: 50%;
  }
  textarea {
    vertical-align: top;
  }
  button {
    text-size-adjust: 2vh;
  }

</style>