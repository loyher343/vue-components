import Vue from 'vue'
import App from './App.vue'
import ServerStatus from './ServerStatus.vue'
import Servers from './Servers.vue'
import ServerMgnt from './ServerMgnt.vue'
import ServerDetails from './ServerDetails.vue'


Vue.component('app-server-status', ServerStatus);
Vue.component('servers', Servers);
Vue.component('server-mgnt', ServerMgnt);
Vue.component('server-details', ServerDetails);

new Vue({
  el: '#app',
  render: h => h(App)
})
