import { createRouter, createWebHistory } from 'vue-router';
import HomePageView from '@/views/HomePageView.vue';
import InstitucionalView from '@/views/InstitucionalView.vue';
import NewsView from '@/views/NewsView.vue';
import ProfessionalView from '@/views/ProfessionalView.vue';
import FAQView from '@/views/FAQView.vue';
import ContactView from '@/views/ContactView.vue';
import NewDetailsView from '@/views/NewDetailsView.vue';


const routes = [
  { path: '/', name: 'home', component: HomePageView },
  { path: '/institucional', name: 'institucional', component: InstitucionalView },
  { path: '/news', name: 'news', component: NewsView },
  { path: '/professional', name: 'professional', component: ProfessionalView },
  { path: '/faq', name: 'faq', component: FAQView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/new-details', name: 'new-details', component: NewDetailsView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;