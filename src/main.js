import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

import Vue from "vue";
import cookieconsent from "vue-cookieconsent-component";

Vue.component("cookie-consent", cookieconsent);

import "bootstrap/dist/js/bootstrap.js";
