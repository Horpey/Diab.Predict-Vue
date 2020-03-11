import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Ontology from './pages/Ontology.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

// Dashboard
import Dashboard from './pages/dashboard/Dashboard.vue';
import Home from './pages/dashboard/Home.vue';
import Patients from './pages/dashboard/Patients.vue';
import Profile from './pages/dashboard/Profile.vue';
import ListPatient from './pages/dashboard/ListPatient.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: '' },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/ontology',
      name: 'ontology',
      components: { default: Ontology, header: MainNavbar, footer: MainFooter },
      props: {
        header: {
          colorOnScroll: 400,
          style: 'background-color: #2c2c2c!important'
        },
        footer: { backgroundColor: 'black' }
      }
    },
    // dashboard
    {
      path: '/dashboard',
      name: 'dashboard',
      components: { default: Dashboard },
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'patients',
          name: 'patients',
          component: Patients,
          children: [
            {
              path: 'listpatient:id',
              name: 'list',
              component: ListPatient
            }
          ]
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        }
      ]
      // components: { default: Ontology, header: MainNavbar, footer: MainFooter },
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
