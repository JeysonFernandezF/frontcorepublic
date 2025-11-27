import { useObservationStore } from "@/stores/observation/observation.store";
import { deleteObservationById, fetchGetObservation } from "@/utils/api/observation/observation.service";
import { storeToRefs } from "pinia";
import { ref } from "vue";


export function useObservationDelete() {

  const store = useObservationStore();

  const deleteLoading = ref(false);
  const deleteConfirm = ref(false);


  const deleteObservation = async (observationId:number) => {
    deleteLoading.value = true
    try{
      const response = await deleteObservationById(observationId);
      store.setRefechObservationList(true);

    }catch(err){
      throw err;
    }finally{

      deleteLoading.value = false
    }

  }

  return {
    deleteLoading,
    deleteConfirm,

    deleteObservation,

  }
}
