import Vue from "vue";
import Router from "vue-router"; 
Vue.use(Router);

//配置路由
const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index"),
  },
];

const router = new Router({
  mode: "history", // hash/history
  //插件路由对象
  routes,
});

export default router;
