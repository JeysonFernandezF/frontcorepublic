import type { Catalog } from "@/types/catalog";
import type { Role, User } from "@/types/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore('user-store',()=>{

  const user = ref<User>();
  const refetch = ref<boolean>(false);

  const setUser     = (newUser:User) => {user.value     = newUser}

  return{
    user,
    refetch,
    setUser,
    setRefetch: (newRefetch: boolean) => refetch.value = newRefetch
  }
})
