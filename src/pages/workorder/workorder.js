import Vue from "vue";
import "@/plugins/element";
import post from "@/components/post.js";
import workorderPage from "./workorderPage/workorderPage.vue";
import store from "./store/store";
import router from "./router/index";
Vue.prototype.$post = post;
new Vue({
  store,
  router,
  render: h => h(workorderPage)
}).$mount("#workorder");
