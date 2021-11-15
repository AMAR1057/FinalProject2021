import { createRouter, createWebHistory } from "vue-router";

import Index from "./components/pages/index.vue";
import Profile from "./components/pages/profile.vue";
import Class from "./components/pages/class.vue";
import messageBoard from "./components/pages/messageBoard.vue";
import Login from "./components/pages/login.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/class",
    name: "class",
    component: Class,
  },

  {
    path: "/MessageBoard",
    name: "MessageBoard",
    component: messageBoard,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
