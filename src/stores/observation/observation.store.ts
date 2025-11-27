import { ref } from "vue"
import { defineStore } from "pinia"
import type { Prc } from "@/types/prc/prc"
import type { Observation } from "@/types/observation/observation"


export const useObservationStore = defineStore('observation-store',()=>{

  const observation = ref<Observation | null>()
  const observationList = ref<Observation[]>([]);

  const refetchObservationList = ref<boolean>(false);

  const setObservation     = (newObservation: Observation | null) => {observation.value = newObservation}
  const setObservationList = (newObservationList: Observation[]) => {observationList.value = newObservationList}

  const setRefechObservationList = (refetch: boolean) => {refetchObservationList.value = refetch};

  return {
    observation,
    observationList,
    refetchObservationList,
    setObservation,
    setObservationList,
    setRefechObservationList,
  }
})
