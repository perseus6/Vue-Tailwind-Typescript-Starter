import Component0 from "./components/0.vue";
import Component1 from "./components/1.vue";
import Component2 from "./components/2.vue";
import NotFound from "./views/NotFound.vue";

export const routes = [
  { path: "/0", component: Component0, meta: { title: "Home" } },
  { path: "/1", component: Component1, meta: { title: "Home" } },
  { path: "/2", component: Component2, meta: { title: "Home" } },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    meta: { title: "Page not found" },
  },
];
