import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './views/Home.vue';
import AboutComponent from './views/About.vue';
import NotFoundComponent from './views/NotFound.vue';

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
  {
    path: '/:catchAll(.*)',
    component: NotFoundComponent,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
