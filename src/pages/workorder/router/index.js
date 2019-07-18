import Vue from "vue";
import Router from "vue-router";
import showTable from "../showTable/showTable";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/showTable",
      component: showTable
    },
    {
      path: "/showTable",
      name: "showTable",
      component: showTable
    }
  ]
});
