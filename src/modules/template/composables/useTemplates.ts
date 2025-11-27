import { useTemplateStore } from "@/stores/template.store";
import type { Meta } from "@/types/response";
import type { Template } from "@/types/template/template";
import { fetchDeleteTemplates, fetchGetTemplates, fetchPostTemplate } from "@/utils/api/template.service";
import { mapResponsePaginationToMeta } from "@/utils/mappers/metaMapper";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export function useTemplates() {

  const store = useTemplateStore();
  const {templateList} = storeToRefs(store);

   const pagination = ref<Meta>({
      current_page:1,
      last_page:1,
      per_page:1
    });

  const deleteLoading = ref(false);
  const deleteConfirm = ref(false);


  const loadingTemplates = ref(true);
  const createSuccess = ref(false);
  const errorSaveTemplate = ref('')

  const addTemplate = async (newTemplate: Template) => {
    try{
      createSuccess.value = false;
      const response = await fetchPostTemplate(newTemplate);

      createSuccess.value=true;
      const data = await response.json();

    }catch(err: any){
      console.log(err);
    }finally{

    }
  }

  const getTemplates = async () => {
    loadingTemplates.value = true
    try{
      store.setTemplates([]);
      const response = await fetchGetTemplates(pagination.value.current_page);
      store.setTemplates(response.data);
      pagination.value = mapResponsePaginationToMeta(response.meta);
    }catch(err){
      console.log(err)
    }finally{
      loadingTemplates.value = false
    }
  }

  const deleteTemplate = async (id:number) => {
    deleteConfirm.value = false;
    deleteLoading.value = true;

    const response = await fetchDeleteTemplates(id);

    if(response){
      deleteConfirm.value = true;
      deleteLoading.value = false;
    }
    await getTemplates()
  }


  const nextPage = () => {
    if (pagination.value.current_page < pagination.value.last_page) {
      pagination.value.current_page += 1;
      getTemplates();
    }
  }

  const prevPage = () => {
    if (pagination.value.current_page > 1) {
      pagination.value.current_page -= 1;
      getTemplates();
    }
  }
  const otherPage = (page:number) => {
    if(pagination.value.current_page == page) return;

    pagination.value.current_page = page;
    getTemplates();
  }

  return{
    templateList,
    loadingTemplates,
    pagination,

    deleteLoading,
    deleteConfirm,

    createSuccess,

    getTemplates,
    deleteTemplate,
    addTemplate,

    nextPage,
    prevPage,
    otherPage,
  }



}
