import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import FormInputs from "vue-inputs";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);
Vue.use(FormInputs);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
