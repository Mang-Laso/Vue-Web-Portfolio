import { createRouter, createWebHistory } from 'vue-router';
import ContactPage from '../components/ContactPage.vue';
import CreativePage from '../components/CreativePage.vue';
import Dashboard from '../components/DashboardPage.vue';
import LoginPage from '../components/LoginPage.vue';
import ShowcasePage from '../components/ShowcasePage.vue'; 
import AboutMe from '../components/AboutMe.vue'; // Ensure this is correct

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'about', // Ensure this matches with the router-link in DashboardPage.vue
        name: 'AboutMe',
        component: AboutMe, // This should point to AboutMe.vue
      },
      {
        path: 'showcase',
        name: 'Showcase',
        component: ShowcasePage,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: ContactPage,
      },
      {
        path: 'creative',
        name: 'Creative',
        component: CreativePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
