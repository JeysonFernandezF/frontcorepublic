import { usePrcStore } from "@/stores/prc/prc.store";
import type { Meta } from "@/types/response";
import { fetchDeletePrc, fetchGetPrcs } from "@/utils/api/prc/prc.service";
import { mapResponsePaginationToMeta } from "@/utils/mappers/metaMapper";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";


export function usePrcs() {

  const store = usePrcStore();
  const {prcList, refetch} = storeToRefs(store);

  const pagination = ref<Meta>({
    current_page:1,
    last_page:1,
    per_page:1
  });

  const loadingPrcList = ref<boolean>(false);
  const deleteLoading = ref(false);
  const deleteConfirm = ref(false);


  const getPrcs = async () => {
    try{
      loadingPrcList.value = true
      store.setPrcList([]);
      const response = await fetchGetPrcs(pagination.value.current_page);
      store.setPrcList(response.data);
      pagination.value = mapResponsePaginationToMeta(response.meta);
    }catch(err){
      console.log(err);
    }finally{
      loadingPrcList.value = false
    }
  }

  const deletePrc = async (id:number) => {
    deleteConfirm.value = false;
    deleteLoading.value = true;

    const response = await fetchDeletePrc(id);

    if(response){
      deleteConfirm.value = true;
      deleteLoading.value = false;
    }
    await getPrcs()
  }


  const nextPage = () => {
    if (pagination.value.current_page < pagination.value.last_page) {
      pagination.value.current_page += 1;
      getPrcs();
    }
  }

  const prevPage = () => {
    if (pagination.value.current_page > 1) {
      pagination.value.current_page -= 1;
      getPrcs();
    }
  }
  const otherPage = (page:number) => {
    if(pagination.value.current_page == page) return;

    pagination.value.current_page = page;
    getPrcs();
  }

  watch(()=>refetch.value, async (newVal) =>{
    if(newVal){
      await getPrcs();
      store.setRefetch(false);
    }
  })
  return {
    prcList,
    pagination,

    loadingPrcList,
    deleteLoading,
    deleteConfirm,

    getPrcs,
    deletePrc,
    nextPage,
    prevPage,
    otherPage,

  }
}
