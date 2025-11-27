import { ref } from "vue"
import { defineStore } from "pinia"
import type { Prc } from "@/types/prc/prc"

export const usePrcStore = defineStore('prc-store',()=>{

  const prc = ref<Prc | null>()
  const prcList = ref<Prc[]>([]);
  const refetch = ref<boolean>(false);

  const setPrc     = (newPrc: Prc) => {prc.value = newPrc}
  const setPrcList = (newPrcList: Prc[]) => {prcList.value = newPrcList}

  return {
    prc,
    prcList,
    refetch,
    setPrc,
    setPrcList,
    setRefetch: (newRefetch: boolean) => refetch.value = newRefetch
  }
})
