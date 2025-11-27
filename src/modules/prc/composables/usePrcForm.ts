import { usePrcFormStore } from "@/stores/prc/prcForm.store";
import { useTemplatePrcStore } from "@/stores/templatePrc.store";
import type { FormPrc } from "@/types/prc/prcForm";
import { fetchGetCatalogPrc, fetchGetTemplatesPrc, fetchPostPrc } from "@/utils/api/prc/prcForm.service";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export function usePrcForm() {
  const store = usePrcFormStore();
  const {catalogPrc,templatesPrc, formPrc} = storeToRefs(store);

  const storeTemplate = useTemplatePrcStore();
  const {template} = storeToRefs(storeTemplate);

  const deleteLoading = ref(false);
  const deleteConfirm = ref(false);


  const loadingTemplates = ref(false);
  const loadingCatalog = ref(false);
  const createSuccess = ref(false);
  const errorSaveTemplate = ref('')

  const addPrc = async () => {
    const form = {
      ...formPrc.value,
      template: template.value
    }
    try{
      createSuccess.value = false;
      const response = await fetchPostPrc(form);

      createSuccess.value=true;
      const data = await response.json();

    }catch(err: any){
      console.log(err);
    }finally{

    }
  }

  const getCatalogPrc = async () => {
    loadingCatalog.value = true
    const response = await fetchGetCatalogPrc();
    loadingCatalog.value = false
    store.setCatalogPrc(response);
  }
  const getTemplatesPrc = async()=> {
    loadingTemplates.value = true
    const response = await fetchGetTemplatesPrc();
    loadingTemplates.value = false
    store.setTemplatesPrc(response.data);
  }

  return{
    catalogPrc,
    formPrc,
    templatesPrc,

    loadingCatalog,
    loadingTemplates,

    deleteLoading,
    deleteConfirm,

    createSuccess,

    getCatalogPrc,
    getTemplatesPrc,
    addPrc,
    resetForm: () => {store.resetForm(); storeTemplate.resetTemplate();}
  }

}
