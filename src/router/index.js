import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/",
    redirect: "/login"
  },
 
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/login.vue")
  },{
    path: "/home",
    name: "home",
    redirect: "/home/homepage",
    component: () => import("../views/home"),
    children:[{
      path:"homepage",
      name:"homepage",
      component:()=>import("../pages/homepage")
    }]
  }

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
