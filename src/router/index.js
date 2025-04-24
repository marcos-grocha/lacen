import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '@/views/HomePageView.vue';
import ProfessionalView from '@/views/ProfessionalView.vue';
import InstitucionalView from '@/views/InstitucionalView.vue';
import NewDetailsView from '@/views/NewDetailsView.vue';
import LoginPage from '@/views/loginView.vue';

const routes = [
  { path: '/', name: 'home', component: HomePageView },
  { path: '/professional', name: 'professional', component: ProfessionalView },
  { path: '/institucional', name: 'institucional', component: InstitucionalView },
  { path: '/new-details', name: 'new-details', component: NewDetailsView },
  { path: '/login', name: 'login', component: LoginPage }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;