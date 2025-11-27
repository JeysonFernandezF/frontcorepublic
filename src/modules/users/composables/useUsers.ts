import { usersStore } from "@/stores/user/users.store"
import type { Meta } from "@/types/response";
import { fetchUserList } from "@/utils/api/user.service";
import { mapResponsePaginationToMeta } from "@/utils/mappers/metaMapper";
import { mapUserListResponse } from "@/utils/mappers/userMapper";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

export const useUsers = () => {

  const store = usersStore();
  const {userList, refetch} = storeToRefs(store);


  const pagination = ref<Meta>({
    current_page:1,
    last_page:1,
    per_page:1
  });

  const loading = ref<boolean>(false);

  const getUsers = async () => {
    loading.value = true;
    try{
      store.setUserList([]);
      const response = await fetchUserList(pagination.value.current_page);
      store.setUserList( mapUserListResponse(response.data));
      pagination.value = mapResponsePaginationToMeta(response.meta);
    }catch(err){
      throw new Error("Error al obtener usuarios")

    }finally{
      loading.value = false
      console.log(loading.value);
    }
  }

  watch(()=>refetch.value, async (newVal) =>{
    if(newVal){
      await getUsers();
      store.setRefetch(false);
    }
  })

  const nextPage = () => {
    if (pagination.value.current_page < pagination.value.last_page) {
      pagination.value.current_page += 1;
      store.setRefetch(true);
    }
  }

  const prevPage = () => {
    if (pagination.value.current_page > 1) {
      pagination.value.current_page -= 1;
      store.setRefetch(true);
    }
  }
  const otherPage = (page:number) => {
    if(pagination.value.current_page == page) return;

    pagination.value.current_page = page;
    store.setRefetch(true);
  }

  return {
    userList,
    pagination,
    loading,

    getUsers,
    prevPage,
    nextPage,
    otherPage
  }
}
