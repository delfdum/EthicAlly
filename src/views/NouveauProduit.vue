<template>
  <div class="">
    <h2>Ajouter un produit</h2>
    <form>
        <label for="">name</label>
        <input type="text" v-model="name"/> <br>

        <label for="">artisan_id</label>
        <input type="number" v-model="artisan_id"/> <br>

        <label for="">category</label>
        <input type="text" v-model="category"/> <br>

        <label for="">type</label>
        <input type="text" v-model="type"/> <br>

        <label for="">matériel</label>
        <input type="text" v-model="materials"/> <br>

        <!-- thumbnail -->
        <!-- photo -->

        <label for="dimensions">dimensions</label>
        <input type="text" v-model="dimensions"/> <br>

        <label for="origine">origine</label>
        <input type="text" v-model="origine"/> <br>

        <label for="longPrez">présentation</label>
        <input type="text" v-model="longPrez"/> <br>

        <label for="">produit du mois</label>
        <input type="text" v-model="produitDuMois"/> <br>

        <label for="artisanDuMois">artisan du mois</label>
        <input type="text" v-model="artisanDuMois"/> <br>

        <button type="button" @click="postProduit">Envoyer</button>
    </form>
 <!--la réponse du formulaire ci-dessous si ça a été validé:  -->
    <p v-if="success">L'article a bien été enregistré</p>
  </div>
</template>

<script>
export default {
  name: "NouveauProduit",
  data() {
    return {
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
       produitDuMois: false,
       artisanDuMois: false,
       success: false,
    }
  },
  methods: {
    postProduit() {
      const axios = require('axios');
  //dans axios.post{2 arguments 1/ le chemin URL, 2/ le body, c'est les infos qu'on envoie à l'API et c'est toujours un objet}
      axios.post(`http://localhost:3000/produits/nouveau`, {
          name: this.name,
          artisan_id: this.artisan_id,
          category: this.category,
          type: this.type,
          materials: this.materials,
          thumbnail: this.thumbnail,
          photo: this.photo,
          dimensions: this.dimensions,
          origine: this.origine,
          longPrez: this.longPrez,
          produitDuMois: this.produitDuMois,
          artisanDuMois: this.artisanDuMois,
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
        this.produitDuMois = "";
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
