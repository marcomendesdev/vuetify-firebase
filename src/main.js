import App from './App.vue'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhw053EvN8N7Ue7jalwAtgri5pKqP66hM",
  authDomain: "vuejs-c511b.firebaseapp.com",
  projectId: "vuejs-c511b",
  storageBucket: "vuejs-c511b.appspot.com",
  messagingSenderId: "982662877186",
  appId: "1:982662877186:web:7bfc47d3ce904610a2d71b"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(VueSweetalert2);

registerPlugins(app)

app.mount('#app')
