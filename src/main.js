import Vue from 'vue'
import App from './App.vue'
import {MdContent, MdCard, MdButton, MdField, MdSwitch} from 'vue-material/dist/components'
import VueClipboard from 'vue-clipboard2'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;

Vue.use(MdContent);
Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdField);
Vue.use(MdSwitch);
Vue.use(VueClipboard)

new Vue({
  render: h => h(App),
}).$mount('#app');
