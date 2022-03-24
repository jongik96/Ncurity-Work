import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/user/Login.vue"),
  },
  {
    path: "/memberList",
    name: "MemberList",
    component: () => import("../views/MemberList.vue"),
    props: true,
  },
  {
    path: "/visitor",
    name: "Visitor",
    component: () => import("../views/Visitor.vue"),
  },
  {
    path: "/modifyUser",
    name: "UserModify",
    component: () => import("../views/user/UserModify.vue"),
  },
  {
    path: "/createUser",
    name: "CreateUser",
    component: () => import("../views/user/CreateUser.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: () => import("../views/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
