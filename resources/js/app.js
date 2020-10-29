/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//import App from './App.vue'
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify'

Vue.use(Vuetify)

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app', require('./App.vue').default);

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 422) {
            store.commit("setErrors", error.response.data.errors);
        } else if (error.response.status === 401) {
            store.commit("setErrors", error.response.data.errors);
            store.commit("auth/setUserData", null);
            localStorage.removeItem("authToken");
        //    router.push({ name: "Login" });
        }
        return Promise.reject(error);
    }
);
axios.interceptors.request.use(function(config) {
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };
    return config;
});

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify(),
//    render: h => h(App)
});
