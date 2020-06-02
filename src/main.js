import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import {store} from './store/store'
Vue.config.productionTip = false
Vue.use(Vuex)
console.log(store)
new Vue({
    el: '#app',
    store,
    render: h => h(App),
})
