import { defineStore } from 'pinia';
import {ref} from 'vue';

import { type User } from  '@/types/auth/user';


export const useAuthStore = defineStore('auth-store', () => {

  const user = ref<User|null>(null);



  const setUser = (newUser: User) => user.value = newUser;
  const clearUser = () => user.value = null


  return {
    user,

    setUser,
    clearUser
  }

})
