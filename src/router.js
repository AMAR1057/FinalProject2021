import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";
import Index from "./components/pages/index.vue";
import Profile from "./components/pages/Profile.vue";
import Class from "./components/pages/class.vue";
import About from "./components/pages/about.vue";
import Login from "./components/pages/login.vue";

const { isAuthenticated } = useAuth();

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
    component: Class,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },

  {
    path: "/about",
    name: "about",
    component: About,
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
