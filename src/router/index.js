import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Accueil from "@/views/Accueil.vue";
import ArtisanDetails from "@/views/ArtisanDetails.vue";
import Artisans from "@/views/Artisans.vue";
import Engagements from "@/views/Engagements.vue";
import ProduitDetails from "@/views/ProduitDetails.vue";
import Produits from "@/views/Produits.vue";



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
    path: '/produitdetails/:id_product',
    name: 'ProduitDetails',
    component: ProduitDetails,
  },
  {
    path: '/allproduits',
    name: 'Produits',
    component: Produits,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
