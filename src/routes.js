import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";
import PageNotFound from "./components/PageNotFound.vue";
import SignupHome from "./components/SignupHome.vue";
import SignUp from "./components/SignUp.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Profile",
    path: "/profile/:name",
    component: Profile,
  },
  {
    name: "PageNotFounc",
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
  {
    name: "SignUpHome",
    path: "/signuphome",
    component: SignupHome
  },
  {
    name: "SignUp",
    path: "/signup",
    component: SignUp
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
