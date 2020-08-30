import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight, faEnvelope, faPhoneAlt, faFlag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedinIn, faGit, faDiscord } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@/styles/main.scss';

library.add(faArrowRight, faLinkedinIn, faGit, faEnvelope, faPhoneAlt, faFlag, faDiscord);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
