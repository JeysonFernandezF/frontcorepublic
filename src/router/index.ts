import NotFound from "@/common/views/NotFound.vue";
import HomePage from "@/modules/landing/views/HomePage.vue";
import { createRouter  , createWebHistory } from "vue-router";

import {useAuth} from "@/modules/auth/composables/useAuth";
import prcRoutes from "./routes/prc";
import templatesRoutes from "./routes/templates";
import usersRoutes from "./routes/users";
import { ROLES } from "@/utils/enums/Roles";
import { validationRoles } from "@/utils/validationRoles";

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        // Landing
        {
            path: '/',
            name: 'landing',
            component: ()=> import('@/layouts/LandingLayout.vue'),
            meta: {requiresAuth:true,roles:[ROLES.ADMIN]},
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: HomePage,
                },

                ...prcRoutes,
                ...templatesRoutes,
                ...usersRoutes
            ]
        },
        // Auth
        {
            path:'/auth',
            name: 'auth',
            redirect: {name: 'login'},
            component: ()=> import('@/layouts/AuthLayout.vue'),
            meta: {requiresAuth:false},
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: ()=> import('@/modules/auth/views/LoginIndemin.vue'),
                },
                {
                    path: 'login/administrador',
                    name: 'login-admin',
                    component: ()=> import('@/modules/auth/views/LoginAdministrador.vue'),
                },
            ]
        },
        //  Not Found
         {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component:  NotFound,
        },
    ],
});

router.beforeEach(async (to, from, next) => {
  const auth = useAuth();
  const isAuthtenticated = await auth.isAuthenticated();
  const roles = to.meta.roles as ROLES[];

  if(!to.matched.length){
    next({name:"NotFound"})
    return;
  }
  if (to.meta.roles && auth.user.value && !validationRoles(auth.user.value?.roles[0],roles)) {
    next({name:"NotFound"})
    return;
  }

  if (to.meta.requiresAuth && !isAuthtenticated) {
    next({ name: "login" });
    return;
  }
  if ((to.name === "login" || to.name === "register") && isAuthtenticated) {
    next({ name: "prc-list" });
    return;
  }
  next();
});


export default router;
