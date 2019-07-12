import Vue from "vue";
import {
  Button,
  Form,
  FormItem,
  Input,
  Checkbox,
  Message,
  Radio,
  RadioGroup,
  Loading,
  Alert,
  MessageBox,
  Menu,
  MenuItem,
  Table,
  TableColumn,
  Notification
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Loading.directive);
Vue.use(Alert);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.config.productionTip = false;
Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
