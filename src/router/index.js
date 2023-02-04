import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import CV_Component from "@/components/CV_Component.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CreateComponent,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditComponent,
  },
  {
    path: "/cv",
    name: "cv",
    component: CV_Component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;