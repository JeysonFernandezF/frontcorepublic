import { usePrcStore } from "@/stores/prc/prc.store";
import { fetchDeletePrc, fetchGetPrcById, fetchGetPrcs } from "@/utils/api/prc/prc.service";
import { storeToRefs } from "pinia";
import { ref } from "vue";


export function usePrc() {

  const store = usePrcStore();
  const {prc} = storeToRefs(store);

  const loadingPrc= ref<boolean>(false);
  const deleteLoading = ref(false);
  const deleteConfirm = ref(false);


  const getPrcById = async (id:number) => {
    loadingPrc.value = true
    try{
      const response = await fetchGetPrcById(id);
      store.setPrc(response.data);
    }catch(error){
      throw error;
    }finally{
      loadingPrc.value = false;
    }
  }

  return {
    prc,

    loadingPrc,
    deleteLoading,
    deleteConfirm,

    getPrcById,

  }
}
