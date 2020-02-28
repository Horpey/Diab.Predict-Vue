import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Ontology from './pages/Ontology.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

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
          style: 'background-color: black!important'
        },
        footer: { backgroundColor: 'black' }
      }
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
