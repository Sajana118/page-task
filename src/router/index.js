import { createRouter, createWebHistory } from 'vue-router'
import Homepage from "@/components/Home-page.vue";
import overlaypage from "@/components/overlay-page.vue";
import formdata from "@/components/form-data.vue";
import informatiom from "@/components/infor-mation.vue";
import filledFrom from "@/components/filledFrom.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },

  {
    path: '/overlay-page',
    name: 'overlay',
    component:overlaypage,
  },
  {
    path: '/form-data',
    name: 'form-data',
    component:formdata,
  },
  {
    path: '/infor-mation',
    name: 'infor-mation',
    component:informatiom,
  },
  {
    path: '/filledForm',
    name: 'filledForm',
    component:filledFrom,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
