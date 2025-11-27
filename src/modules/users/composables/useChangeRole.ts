import { rolesStore } from "@/stores/user/roles.store"
import { usersStore } from "@/stores/user/users.store";
import { fetchRoles, updateUserRole } from "@/utils/api/user.service";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export const useChangeRole = () => {

  const store = rolesStore();
  const {roleList} = storeToRefs(store);

  const storeUser = usersStore();

  const loading = ref<boolean>(false);
  const loadingConfirm = ref<boolean>(false);

  const getRoles = async () => {
    loading.value = true;

    try{
      const response = await fetchRoles();
      store.setRoleList(response.data);

    }catch(err){
      throw new Error("Error al obtener roles")

    }finally{
      loading.value = false
    }
  }

  const handleRoleChange  = async (userId:number, roles:string[]) => {
    loading.value = true;
    loadingConfirm.value = false;
    try{
      await updateUserRole(userId, roles);
      storeUser.setRefetch(true);
      loadingConfirm.value = true;

    }catch(err){
      throw new Error("Error al cambiar el rol")

    }finally{
      loading.value = false
    }
  }

  return {
    roleList,
    loading,
    loadingConfirm,
    handleRoleChange ,
    getRoles
  }
}
