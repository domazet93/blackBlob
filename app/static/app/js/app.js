import VueRouter from "vue-router";
import routes from "@/routes/routes";
import App from "@/App";

Vue.use(VueRouter);

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

