
import {ref} from 'vue'

import { storeToRefs } from 'pinia';

import type { Template } from '@/types/template/template';
import { fetchEditTemplate, fetchGetTemplateById, fetchPostTemplate } from '@/utils/api/template.service';
import { useTemplateStore } from '@/stores/template.store';

export function useTemplate() {

  const store = useTemplateStore()
  const {template} = storeToRefs(store);

  const loading = ref(true);

  const editSuccess = ref(false);

  const getTemplate = async(id:number) => {
    try {
      store.setTemplate(null);
      const response = await fetchGetTemplateById(id);
      store.setTemplate(response.data);
    }catch(err:any){

    }
  }

  const editTemplate = async (id:number, newTemplate:Template) => {
    try{
      editSuccess.value = false;
      const response = await fetchEditTemplate(id, newTemplate);
      editSuccess.value = true;
    }catch (err:any){

    }
  }

  return {
    loading,

    editSuccess,

    template,

    getTemplate,
    editTemplate
  }

}
