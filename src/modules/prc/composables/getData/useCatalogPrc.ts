import { usePrcFormStore } from "@/stores/prc/prcForm.store";
import { useTemplatePrcStore } from "@/stores/templatePrc.store";
import type { FormPrc } from "@/types/prc/prcForm";
import { fetchGetCatalogPrc, fetchGetTemplatesPrc, fetchPostPrc } from "@/utils/api/prc/prcForm.service";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export function useCatalogPrc() {
  const store = usePrcFormStore();
  const {catalogPrc} = storeToRefs(store);

  const loadingCatalog = ref(false);

  const getCatalogPrc = async () => {
    loadingCatalog.value = true
    const response = await fetchGetCatalogPrc();
    loadingCatalog.value = false
    store.setCatalogPrc(response);
  }

  return{
    catalogPrc,
    loadingCatalog,
    getCatalogPrc,
  }

}
