<template>
  <div class="">
    <h2>Ajouter un produit</h2>
    <form>
        <label for="">name</label>
        <input type="text" v-model="name"/>
        <label for="">type</label>
        <input type="text" v-model="type"/>
        <label for="">category</label>
        <input type="text" v-model="category"/>
        <button type="button" @click="postProduit()">Envoyer</button>
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
       info: null,
       produits: null,
       name: "",
       type: "",
       category: "",
       success: false,
       id:"",
    }
  },
  methods: {
    postProduit() {
      const axios = require('axios');
  //dans axios.post{2 arguments 1/ le chemin URL, 2/ le body, c'est les infos qu'on envoie à l'API et c'est toujours un objet}
      axios.post(`http://localhost:3000/produits/`, {
          name: this.name,
          type: this.type,
          category: this.category,
      })
      .then(() => {
        this.name = "";
        this.type = "";
        this.category = "";
        this.success = true;
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  }
