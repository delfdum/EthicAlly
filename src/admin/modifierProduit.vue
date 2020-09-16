<template>
  <div class="artisan-form artisans-group">
    
      <h2>Modifier ce produit</h2>

      <div class="artisan-div" v-for="product in produitSelect" :key="product.id">
      <button @click="retourMenu()">retour au menu</button>

    <form>
        <label for="">name</label>
        <input type="text" v-model="product.name" /><br><br>

         <label for="artisan-select">Choisir l'artisan:</label>
          <select name="artisans" v-model="product.artisan_id" >
            <option v-for="artisan in artisans" :key="artisan.id" :value="artisan.id" > {{artisan.name}}</option>
          </select>  <br><br>

        <label for="">category</label>
        <input type="text" v-model="product.category" /><br><br>

        <label for="">type</label>
        <input type="text" v-model="product.type" /><br><br>

        <label for="">materials</label>
        <input type="text" v-model="product.materials" /><br><br>

        <label for="">photo</label>
        <input type="text" v-model="product.photo" /><br><br>

        <label for="">dimensions</label>
        <input type="text" v-model="product.dimensions" /><br><br>

        <label for="presentation">présentation</label>
        <textarea v-model="product.longPrez" rows="15" cols="105" ></textarea> <br><br>

        <label for="origine">origine</label>
        <input type="text" v-model="product.origine"/><br><br>

        <label for="firstPage">première page</label>
        <input type="checkbox" v-model="product.firstPage"><br><br>

        <label for="artisanDuMois">produit du mois</label>
        <input type="checkbox" v-model="product.produitDuMois"><br><br>

        <button type="button" @click="putProduct(product)">Envoyer</button>
    </form>

 <!--la réponse du formulaire ci-dessous si ça a été validé:  -->
    <p v-if="success">Le produit a bien été modifié</p>
   </div>
  </div>
</template>

<script>
export default {
  name: "modifierProduit",
  data() {
    return {
      artisans:"",
       produitSelect: "", // correspond au tableau get
       success: false
    }
  },

  mounted() {
     const axios = require("axios");
     axios.get('http://localhost:3000/artisans')
     .then(response => (this.artisans = response.data))
       axios.get(`http://localhost:3000/produitSelect/${this.$route.params.id}`)
      .then(response => (this.produitSelect = response.data));
  
   },

  methods: {
    retourMenu() {
        this.$router.push({ path: `/MenuAdmin` });
      },

    putProduct(product) {
        const axios = require('axios');
        axios.put(`http://localhost:3000/changeProduit/${product.id}`, {
           name: product.name,
           artisan_id: product.artisan_id,
           category: product.category,
           type: product.type,
           materials: product.materials,
           photo: product.photo,
           dimensions: product.dimensions,               
          origine: product.origine,
          longPrez: product.longPrez,
          firstPage: product.firstPage,
          produitDuMois: product.produitDuMois   
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