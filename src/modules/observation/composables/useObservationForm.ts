import { useFormStore } from "@/stores/observation/form.store";
import { fetchGetFormObservation } from "@/utils/api/observation/observation.service";
import { storeToRefs } from "pinia";
import { ref } from "vue";


export function useObservationForm() {

  const store = useFormStore();
  const {form} = storeToRefs(store);


  const loadingForm= ref<boolean>(false);
  const deleteLoading = ref(false);
  const deleteConfirm = ref(false);


  const getFormByObservation = async (observationId:number) => {
    loadingForm.value = true
    const response = await fetchGetFormObservation(observationId);
    console.log(response);
    store.setForm(response);
    loadingForm.value = false
  }

  return {
    form,

    loadingForm,
    deleteLoading,
    deleteConfirm,

    getFormByObservation,

  }
}
