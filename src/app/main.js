import Vue from 'vue';
import moment from 'moment';
import { Button, message } from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Button);

Vue.prototype.$message = message;
Vue.prototype.$moment = moment;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
