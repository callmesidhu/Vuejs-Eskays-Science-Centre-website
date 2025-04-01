import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ResultPage from '../pages/ResultPage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage },
  { path: '/results', component: ResultPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
