import { createRouter, createWebHistory } from 'vue-router'
import Homepage from "@/components/Home-page.vue";
import page from "@/components/reservation-page.vue";
import overlaypage from "@/components/overlay-page.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
  },

  {
    path: '/reservation-page',
    name: 'page',
    component:page,
  },
  {
    path: '/overlay-page',
    name: 'overlay',
    component:overlaypage,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
