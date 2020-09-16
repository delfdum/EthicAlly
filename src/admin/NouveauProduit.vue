<template>
  <div class="">
    <h2>Ajouter un produit</h2>
     <button @click="retourMenu()">retour au menu</button>
    <form>
        <label for="">name</label>
        <input type="text" v-model="name"/> <br><br>

        <label for="artisan-select">Choisir l'artisan:</label>
          <select name="artisans" v-model="artisan_id" >
            <option v-for="artisan in artisans" :key="artisan.id" :value="artisan.id" > {{artisan.name}}</option>
          </select>  <br><br>

        <label for="">category</label>
        <input type="text" v-model="category"/> <br><br>

        <label for="">type</label>
        <input type="text" v-model="type"/> <br><br>

        <label for="">matériel</label>
        <input type="text" v-model="materials"/> <br><br>

        <!-- thumbnail ALIX-->
        <!-- photo ALIX-->

        <label for="dimensions">dimensions</label>
        <input type="text" v-model="dimensions"/> <br><br>

        <label for="origine">origine</label>
        <input type="text" v-model="origine"/> <br><br>

        <label for="longPrez">présentation</label>
        <textarea v-model="longPrez" rows="15" cols="55"></textarea> <br><br>

        <label for="firstPage">première page</label>
        <input type="checkbox" value="première page" v-model="firstPage"><br><br>

        <!-- <label for="">produit du mois</label>
        <input type="text" v-model="produitDuMois"/> <br><br>

        <label for="artisanDuMois">artisan du mois</label>
        <input type="text" v-model="artisanDuMois"/> <br><br> -->

        <button type="button" @click="postProduit">Envoyer</button>
    </form>
 <!--la réponse du formulaire ci-dessous si ça a été validé:  -->
    <p v-if="success">Le produit a bien été enregistré</p>
  </div>
</template>

<script>
export default {
  name: "NouveauProduit",
  data() {
    return {
      artisans: "",
       name: "",
       artisan_id:"",
       category: "",
       type: "",
       materials: "",
       thumbnail: "",
       photo: "",
       dimensions: "",
       origine: "",
       longPrez: "",     
       firstPage: false,
       success: false,
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

    postProduit() {
      const axios = require('axios');
  //dans axios.post{2 arguments 1/ le chemin URL, 2/ le body, c'est les infos qu'on envoie à l'API et c'est toujours un objet}
      axios.post(`http://localhost:3000/produits/nouveau`, {
          name: this.name,
          artisan_id: this.artisan_id,
          category: this.category,
          type: this.type,
          materials: this.materials,
          photo: this.photo,
          dimensions: this.dimensions,
          origine: this.origine,
          longPrez: this.longPrez,
          firstPage: this.firstPage,
      })
      .then(() => {
        this.name = "";
        this.artisan_id = "";
        this.category= "";
        this.type= "";
        this.materials= "";
        this.thumbnail = "";
        this.photo = "";
        this.dimensions = "";
        this.origine = "";
        this.longPrez = "";
        this.firstPage = "";
        this.success = true;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>
