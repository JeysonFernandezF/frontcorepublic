import type { Catalog } from "@/types/catalog";
import type { Meta } from "@/types/response";
import type { Role, User } from "@/types/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usersStore = defineStore('users-store',()=>{

  const userList = ref<User[]>([]);
  const refetch = ref<boolean>(false);

  const setUserList = (users  :User[]) => { userList.value = users}

  return{
    userList,
    refetch,
    setUserList,
    setRefetch: (newRefetch: boolean) => refetch.value = newRefetch
  }
})
