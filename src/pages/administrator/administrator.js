import Vue from "vue";
import Admin from "./admin/admin.vue";
import router from "./router";
import store from "./store/store";
import "@/plugins/element.js";
import post from "@/components/post.js";
Vue.prototype.$post = post;
new Vue({
  router,
  store,
  render: h => h(Admin)
}).$mount("#admin");
