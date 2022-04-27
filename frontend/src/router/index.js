import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Solucoes from '../views/Soluctions.vue';
import Portfolio from '../views/Portfolio.vue';
import Short from '../views/Short.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projeto_california',
    name: 'California',
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
    component: NotFound,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    path: '/:alias',
    name: 'Short',
    component: Short,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
