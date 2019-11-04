import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'input',
      component: () => import('./components/Input.vue'),
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('./components/Edit.vue'),
    },
  ]
})