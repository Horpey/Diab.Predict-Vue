import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import Vuex from 'vuex'
import store from './store/store';
import Axios from 'axios';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import ECharts from "vue-echarts";
import { use } from "echarts/core";
// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LegendComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { TitleComponent } from "echarts/components";

const options = {
  // You can set your default options here
};


Vue.use(Toast, options);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}
Vue.use(Vuex);
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent,
  PieChart,
  LegendComponent,
  LineChart,
  TitleComponent,
]);
Vue.component("v-chart", ECharts);


Vue.use(NowUiKit);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
