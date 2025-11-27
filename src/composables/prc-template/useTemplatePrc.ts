
import {ref} from 'vue'

import { storeToRefs } from 'pinia';

import type { Template, TemplateForm } from '@/types/template/template';
import { useTemplatePrcStore } from '@/stores/templatePrc.store';

export function useTemplatePrc() {

  const store = useTemplatePrcStore()
  const {template, templateId} = storeToRefs(store);

  const loading = ref(false);
  const isNewTemplate = ref<boolean>(false);

  const editSuccess = ref(false);

  const editTemplate = async (newTemplate:TemplateForm) => {
    try{
      editSuccess.value = false;
      store.setTemplate(newTemplate);
      editSuccess.value = true;
    }catch (err:any){

    }
  }

  const setTemplate = (template_form_id: number, templatesPrc: Template[]) => {
    store.setTemplate(templatesPrc.find((e: Template) => e.id === template_form_id) as TemplateForm);
    store.setTemplateId(template_form_id);
  }

  return {
    loading,

    editSuccess,

    template,

    editTemplate,
    setTemplateId: (id:Number) => store.setTemplateId(id),
    setTemplate,
    checKTemplateId: (id:Number) => id != templateId.value
  }

}
