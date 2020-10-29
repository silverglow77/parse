import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

const guest = (to, from, next) => {
    //localStorage.removeItem("authToken");
    let test = localStorage.getItem("authToken");

    if (!test) {
        return next();
    } else {
        return next("/");
    }
};
const auth = (to, from, next) => {
    let test = localStorage.getItem("authToken");
    if (test) {
        return next();
    } else {
        return next("/login");
    }
};

const routes = [
        {
            path: "/",
            name: "Main",
            // beforeEnter: auth,
            component: () => import("../views/Main.vue")
        },
        {
            path: "/home",
            name: "Home",
            component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
        },
        {
            path: "/login",
            name: "Login",
            beforeEnter: guest,
            component: () =>
                import(/* webpackChunkName: "login" */ "../views/Auth/Login.vue")
        },
        {
            path: "/register",
            name: "Register",
            beforeEnter: guest,
            component: () =>
                import(/* webpackChunkName: "register" */ "../views/Auth/Register.vue")
        },
    ];

const router = new VueRouter({
    mode: "history",
    base: process.env.MIX_BASE_URL,
    routes
});

export default router;