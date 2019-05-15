import Vue from 'vue'
import App from './App.vue'
import {MdContent, MdCard, MdButton, MdField, MdSwitch} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;

Vue.use(MdContent);
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdSwitch);

new Vue({
  render: h => h(App),
}).$mount('#app');
