
import TemplateEdit from "@/modules/template/views/TemplateEdit.vue";
import TemplateList from "@/modules/template/views/TemplateList.vue";
import TemplateNew from "@/modules/template/views/TemplateNew.vue";
import TemplateView from "@/modules/template/views/TemplateView.vue";
import type { RouteRecordRaw } from "vue-router";


const templatesRoutes:RouteRecordRaw[] = [
  {
    path: 'plantillas',
    name: 'templates',
    redirect: { name: 'templates-list' },
    children:[
      {
        path: 'lista',
        name: 'templates-list',
        component: TemplateList,
      },
      {
        path: 'crear',
        name: 'templates-new',
        component: TemplateNew,
      },
      {
        path: 'ver/:id',
        name: 'templates-view',
        component: TemplateView,
      },
      {
        path: 'editar/:id',
        name: 'templates-edit',
        component: TemplateEdit,
      },
    ]

  },

]

export default templatesRoutes;
