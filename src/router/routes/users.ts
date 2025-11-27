import HomePage from "@/modules/landing/views/HomePage.vue";
import UsersList from "@/modules/users/views/UsersList.vue";
import type { RouteRecordRaw } from "vue-router";


const usersRoutes:RouteRecordRaw[] = [
  {
    path: 'usuarios/list',
    name: 'users-list',
    component: UsersList,
  },
]

export default usersRoutes;
