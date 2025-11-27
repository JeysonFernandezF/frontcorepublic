import type {  TemplateForm } from "@/types/template/template";
import { defineStore } from "pinia";
import { ref } from "vue";


const initialTemplate = ():TemplateForm => ({
    id:0,
    name:'',
    error_name: false,
    description:'',
    error_description: false,
    uses:0,
    form_sections:[]
  })

export const useTemplatePrcStore = defineStore('template-prc-store', () => {

  const template  = ref<TemplateForm>(initialTemplate());
  const templateId = ref<Number>(0);
  const loading = ref(false);
  const error = ref(null);


  const setTemplate  = (newTemplate:TemplateForm) => {template.value = newTemplate }
  const setTemplateId   = (newTemplateId:Number) => {templateId.value = newTemplateId }
  const resetTemplate = () =>{template.value = initialTemplate(); templateId.value = 0}
  return {
    template,
    templateId,
    setTemplate,
    setTemplateId,
    resetTemplate
  }

})
