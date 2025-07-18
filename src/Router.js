import { createWebHistory, createRouter } from "vue-router";

import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import JobsIndex from "./components/JobsIndex.vue";
import JobsNew from "./components/JobsNew.vue"; 

const routes = [
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/jobs", component: JobsIndex },
  { path: "/jobs/new", component: JobsNew },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;