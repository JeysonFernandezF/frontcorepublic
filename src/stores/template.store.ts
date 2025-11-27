import type { Template } from "@/types/template/template";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useTemplateStore = defineStore('template-store', () => {

  const template  = ref<Template | null>();
  const templateList = ref<Template[]>([]);
  const loading = ref(false);
  const error = ref(null);


  const setTemplates = (newTemplates:Template[]) => {templateList.value = [...newTemplates]}
  const setTemplate  = (newTemplate:Template | null) => {template.value = newTemplate }
  return {
    templateList,
    template,

    setTemplates,
    setTemplate
  }

})
