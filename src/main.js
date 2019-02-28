import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
// const API_KEY = 'AIzaSyBCk5upqbjRmGuxcP9FjUH2N_H8pefdIUs';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
