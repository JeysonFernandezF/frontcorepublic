import { useObservationStore } from "@/stores/observation/observation.store";
import { fetchGetObservation } from "@/utils/api/observation/observation.service";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";


export function useObservation() {

  const store = useObservationStore();
  const {observation} = storeToRefs(store);

  const loadingObservation= ref<boolean>(false);
  const deleteLoading = ref(false);
  const deleteConfirm = ref(false);


  const getObservation = async (observationId:number) => {
    loadingObservation.value = true;
    store.setObservation(null);
    const response = await fetchGetObservation(observationId);
    console.log(response);
    store.setObservation(response.data);
    loadingObservation.value = false
  }


  return {
    observation,

    loadingObservation,
    deleteLoading,
    deleteConfirm,

    getObservation,

  }
}
