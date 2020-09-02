<template>
  <div class="artisan-form">
    <h2>Ajouter un artisan</h2>
    <form method='post' encType="multipart/form-data">
      <div class="field">
        <label for="name">nom</label>
        <input type="text" v-model="name"/>
      </div>
      <div class="field">
        <label for="presentation">présentation</label>
        <textarea v-model="presentation" rows="15" cols="55"></textarea>
      </div>
      <!-- photo PARTIE ALIX-->
      <div class="field">
        <label for="photo">portrait</label>
        <input type="file" name="photo" />
      </div>
      <!-- fin photo -->
      <div class="field">
        <label for="origine">origine</label>
        <input type="text" v-model="origine"/>
      </div>
      <div class="field">
        <label for="firstPage">première page</label>
        <input type="checkbox" value="première page" v-model="firstPage">
      </div>
      <div class="field">
        <label for="artisanDuMois">artisan du mois</label>
        <input type="checkbox" value="artisan du mois" v-model="artisanDuMois"/>
      </div>
      <button type="button" class="send" @click="postArtisan">Envoyer</button>
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

<style  lang="css" scoped>

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
    width: 18%;
  }

  input, textarea {
    border: 0px;
    border-radius: 1rem;
    width: 50%;
  }

  textarea {
    vertical-align: top;
  }

  .send {
    background-color: #006845;
    border: none;
    border-radius: 1rem;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    margin: 2rem 0rem;
    padding: 0.2rem 1rem 0.3rem 1rem;
    text-align: center;
  }

  .upload {
    background-color: #dbdbdb;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.2rem 1rem 0.3rem 1rem;
    text-align: center;
    width: 7rem;
  }


@media only screen and (max-device-width: 1024px) {

  form {
    width: 100%;
  }

  label {
    font-size: 1.2rem;
    width: 24%;
  }

  input, textarea {
    font-size: 1.2rem;
  }

  .send {
    font-size: 1.2rem;
  }

}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {

  h2 {
    font-size: 1.5rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%
  }

  label {
    text-align: center;
    width: 100%;
  }

  input, select, textarea {
    width: 100%;
  }

}
</style>
