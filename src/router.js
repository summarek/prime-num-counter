import Vue from "vue";
import Router from "vue-router";
import Home from "./views/PolishLang.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/EnglishLang",
      name: "EnglishLang",
      // route level code-splitting
      // this generates a separate chunk (EnglishLang.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "EnglishLang" */ "./views/EnglishLang.vue")
    }
  ]
});
