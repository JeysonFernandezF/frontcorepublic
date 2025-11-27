
import ObservationList from "@/modules/observation/views/ObservationList.vue";
import ObservationView from "@/modules/observation/views/ObservationView.vue";
import PrcEdit from "@/modules/prc/views/PrcEdit.vue";
import PrcList from "@/modules/prc/views/PrcList.vue";
import PrcNew from "@/modules/prc/views/PrcNew.vue";
import PrcView from "@/modules/prc/views/PrcView.vue";
import TemplatePrcEdit from "@/modules/template/views/TemplatePrcEdit.vue";
import type { RouteRecordRaw } from "vue-router";


const prcRoutes:RouteRecordRaw[] = [
  {
      path: '/prc',
      name: 'prc',
      redirect: { name: 'prc-list' },
      children:[
        {
          path: 'lista',
          name: 'prc-list',
          component: PrcList,
        },
        {
          path: 'crear',
          name: 'prc-new',
          component: PrcNew,
        },
        {
          path: 'crear/template/:id/edit',
          name: 'prc-template-edit',
          component: TemplatePrcEdit,
        },
        {
          path: 'edit/:id',
          name: 'prc-edit',
          component: PrcEdit,
        },
        {
          path: 'ver/:id',
          name: 'prc-view',
          component: PrcView,
        },
        {
          path: 'ver/:id/observaciones',
          name: 'observations-list',
          component: ObservationList,
        },
        {
          path: 'ver/:id/observaciones/ver/:idObservation',
          name: 'observation-view',
          component: ObservationView,
        },
      ]

    },
]

export default prcRoutes;
