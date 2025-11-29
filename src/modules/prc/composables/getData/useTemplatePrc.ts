import { usePrcFormStore } from "@/stores/prc/prcForm.store";
import {fetchGetTemplatesPrc } from "@/utils/api/prc/prcForm.service";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export function useTemplatePrc() {
  const store = usePrcFormStore();
  const {templatesPrc} = storeToRefs(store);

  const loadingTemplates = ref(false);

  const getTemplatesPrc = async()=> {
    loadingTemplates.value = true
    const response = await fetchGetTemplatesPrc();
    loadingTemplates.value = false
    store.setTemplatesPrc(response.data);
  }

  return{
    templatesPrc,
    loadingTemplates,
    getTemplatesPrc,
  }

}
