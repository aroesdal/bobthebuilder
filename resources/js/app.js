require('./bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './Router/index'
import App from './App.vue'

import axios from "axios"
import VueAxios from 'vue-axios'

// import vuetify from './vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const app = new Vue({
   el: '#app',
   router,
   vuetify: new Vuetify({
       icons: {
           iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
       },
   }),
   components: {App}
});
