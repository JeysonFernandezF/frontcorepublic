import type { Catalog } from "@/types/catalog";
import type { Role, User } from "@/types/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const rolesStore = defineStore('roles-store',()=>{

  const roleList = ref<Role[]>([]);
  const refetch = ref<boolean>(false);

  const setRoleList = (roles  :Role[]) => {roleList.value = roles}

  return{
    roleList,
    refetch,
    setRoleList,
    setRefetch: (newRefetch: boolean) => refetch.value = newRefetch
  }
})
