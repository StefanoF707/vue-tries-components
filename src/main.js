import Vue from "vue";
import App from "./App.vue";
import AxiosPlugin from './plugin/AxiosPlugin.js';

Vue.config.productionTip = false;
Vue.use(AxiosPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
