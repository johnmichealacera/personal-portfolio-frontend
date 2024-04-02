import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './views/Home.vue';
import AboutComponent from './views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
