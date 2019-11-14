import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { store } from './store';
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAeuXEoB7Qub-TiNpIBl-cQNos60gKRrSU",
  authDomain: "purplechimp-goal-tracker.firebaseapp.com",
  databaseURL: "https://purplechimp-goal-tracker.firebaseio.com",
  projectId: "purplechimp-goal-tracker",
  storageBucket: "purplechimp-goal-tracker.appspot.com",
  messagingSenderId: "465286447459",
  appId: "1:465286447459:web:bfaeca49f3fdf761ac5356"
};

firebase.initializeApp(firebaseConfig);
Vue.prototype.$db = firebase.firestore();

Vue.config.productionTip = false

export default new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
})
