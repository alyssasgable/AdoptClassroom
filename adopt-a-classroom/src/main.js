import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import 'firebase/firestore'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { firestorePlugin } from 'vuefire'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(firestorePlugin)

let app = ''

var firebaseConfig = {
  apiKey: "AIzaSyBPCHfh2W13zqFySdx5Q6VzC6P3-bMAEl8",
  authDomain: "adoptaclassroom-54d87.firebaseapp.com",
  databaseURL: "https://adoptaclassroom-54d87.firebaseio.com",
  projectId: "adoptaclassroom-54d87",
  storageBucket: "adoptaclassroom-54d87.appspot.com",
  messagingSenderId: "857635720340",
  appId: "1:857635720340:web:825a091e882472527cb881",
  measurementId: "G-86ME9S3KWV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const db = firebase.firestore()

firebase.auth().onAuthStateChanged(() => {
   if (!app) {
      app = new Vue({
        router,
        render: h => h(App)
      }).$mount('#app');
}

})
