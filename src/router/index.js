import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Accueil from "@/views/Accueil.vue";
import ArtisanDetails from "@/views/ArtisanDetails.vue";
import Artisans from "@/views/Artisans.vue";
import Engagements from "@/views/Engagements.vue";
import ProduitDetails from "@/views/ProduitDetails.vue";
import Produits from "@/views/Produits.vue";
import NouveauProduit from "@/admin/NouveauProduit.vue";
import NouvelArtisan from "@/admin/NouvelArtisan.vue";
import DeleteArtisan from "@/admin/DeleteArtisan.vue";
import ModifierArtisan from "@/admin/ModifierArtisan.vue";
import modifartisans from "@/admin/modifartisans.vue";
import modifierProduit from "@/admin/modifierProduit.vue";
import modifProduits from "@/admin/modifProduits.vue";
import DeleteProduit from "@/admin/DeleteProduit.vue";
import MenuAdmin from "@/admin/MenuAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/accueil',
    name: 'Accueil',
    component: Accueil,
  },
  {
    path: '/artisandetails/:id',
    name: 'ArtisanDetails',
    component: ArtisanDetails,
  },
  {
    path: '/artisans',
    name: 'Artisans',
    component: Artisans,
  },
  {
    path: '/nosEngagements',
    name: 'Engagements',
    component: Engagements,
  },
  {
    path: '/produitdetails/:id',
    name: 'ProduitDetails',
    component: ProduitDetails,
  },
  {
    path: '/allproduits',
    name: 'Produits',
    component: Produits,
  },
  {
    path: '/nouveauProduit',
    name: 'NouveauProduit',
    component: NouveauProduit,
  },
  {
    path: '/nouvelArtisan',
    name: 'NouvelArtisan',
    component: NouvelArtisan,
  },
  {
    path: '/deleteArtisan',
    name: 'DeleteArtisan',
    component: DeleteArtisan,
  },
  {
    path: '/modifierArtisan/:id',
    name: 'ModifierArtisan',
    component: ModifierArtisan,
  },
  {
    path: '/modifartisans',
    name: 'modifartisans',
    component: modifartisans,
  },
  {
    path: '/modifierProduit/:id',
    name: 'modifierProduit',
    component: modifierProduit,
  },
  {
    path: '/modifProduits',
    name: 'modifProduits',
    component: modifProduits,
  },
  {
    path: '/deleteProduit',
    name: 'DeleteProduit',
    component: DeleteProduit,
  },
  {
    path: '/MenuAdmin',
    name: 'MenuAdmin',
    component: MenuAdmin,
  },

  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
