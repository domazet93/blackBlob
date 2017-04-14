import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueCookie from "vue-cookie";
import routes from "@/routes/routes";
import App from "@/App";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueCookie);

Vue.http.headers.common["X-CSRFToken"] = VueCookie.get("csrftoken");

export const router = new VueRouter({
    routes: routes,
});

new Vue({
    el: "#wrapper",
    router,
    render: h => h(App),
    template: "<App/>",
    components: { App }
});

