import { useObservationStore } from "@/stores/observation/observation.store";
import { fetchGetObservation } from "@/utils/api/observation/observation.service";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
import { fetchGetObservationsByPrc } from '@/utils/api/observation/observation.service';
import type { Meta } from "@/types/response";
import { mapResponsePaginationToMeta } from "@/utils/mappers/metaMapper";


export function useObservations(prcId: number) {

  const store = useObservationStore();
  const {observationList, refetchObservationList} = storeToRefs(store);

  const pagination = ref<Meta>({
    current_page:1,
    last_page:1,
    per_page:1
  });

  const loadingObservation= ref<boolean>(false);
  const deleteLoading = ref(false);
  const deleteConfirm = ref(false);


  const getObservations = async (id:number) => {
    loadingObservation.value = true
    try{
      store.setObservationList([]);
      const response = await fetchGetObservationsByPrc(id, pagination.value.current_page);
      store.setObservationList(response.data);
      pagination.value = mapResponsePaginationToMeta(response.meta);
    }catch(error){
      throw error;
    }finally{
      loadingObservation.value = false
    }
  }

  watch(refetchObservationList,async (newVal) => {
    if(newVal) {
      await getObservations(prcId);
    }
  })

  onMounted(async ()=> {
    if(prcId && Number(prcId)){
      await getObservations(Number(prcId));
    }
  })

   const nextPage = () => {
    if (pagination.value.current_page < pagination.value.last_page) {
      pagination.value.current_page += 1;
      getObservations(prcId);
    }
  }

  const prevPage = () => {
    if (pagination.value.current_page > 1) {
      pagination.value.current_page -= 1;
      getObservations(prcId);
    }
  }
  const otherPage = (page:number) => {
    if(pagination.value.current_page == page) return;

    pagination.value.current_page = page;
    getObservations(prcId);
  }

  return {
    observationList,
    pagination,

    loadingObservation,
    deleteLoading,
    deleteConfirm,

    getObservations,
    nextPage,
    prevPage,
    otherPage,
  }
}
