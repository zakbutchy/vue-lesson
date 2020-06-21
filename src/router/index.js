import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import View01 from "../views/View01.vue";
import MethodTest from "@/views/MethodTest.vue";
import View03 from "@/views/View03.vue";
import SlotTest from "@/views/SlotTest.vue";
import ComputedTest from "@/views/ComputedTest.vue";
import ListTest from "@/views/ListTest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/view01",
    name: "view01",
    component: View01
  },
  {
    path: "/method-test",
    name: "MethodTest",
    component: MethodTest
  },
  {
    path: "/v03",
    name: "v03",
    component: View03
  },
  {
    path: "/slot-test",
    name: "SlotTest",
    component: SlotTest
  },
  {
    path: "/computed-test",
    name: "ComputedTest",
    component: ComputedTest
  },
  {
    path: "/v-for-test",
    name: "ListTest",
    component: ListTest
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
