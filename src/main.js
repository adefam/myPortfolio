import { createApp } from "vue";
import App from "./App.vue";
import Router from "./Router/Router";
import "./index.css";
import AOS from 'aos';
import './aos.css';


AOS.init();

createApp(App).use(Router).mount("#app");
