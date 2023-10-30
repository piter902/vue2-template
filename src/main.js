import Vue, { install } from '@piter.fe/core';
import routes from '../.route';
import '@/assets/style/tailwind.css';
Vue.use(install, {
  Router: {
    routes,
    mode:'hash',
    beforeEach(to, from, next, http) {
      console.log(to, from, next, http);
      next();
    }
  },
  netWork: {}
});
