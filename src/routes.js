import { createRouter, createWebHashHistory } from "vue-router";
import PreviewPage from "@/pages/PreviewPage.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "preview",
      path: "/",
      component: PreviewPage,
    },
    {
      name: "form",
      path: "/form",
      component: () => import("@/pages/FormPage.vue"),
    },
  ],
});

export default router;
