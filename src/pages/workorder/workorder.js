import Vue from "vue";
import "../../plugins/element";
import post from "@/components/post.js";
import workorderPage from "./workorderPage/workorderPage.vue";
Vue.prototype.$post = post;
new Vue({
  render: h => h(workorderPage)
}).$mount("#workorder");
