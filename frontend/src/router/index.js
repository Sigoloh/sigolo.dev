import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Solucoes from '../views/Soluctions.vue';
import Portfolio from '../views/Portfolio.vue';
import Contato from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/solucoes',
    name: 'Solucoes',
    component: Solucoes,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
