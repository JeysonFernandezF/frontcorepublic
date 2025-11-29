import { useAuthStore } from '@/stores/auth.store'
import {ref} from 'vue'
import { storeToRefs } from 'pinia';

import { API_URL } from '@/utils/api/api';
import { userMapper, type User } from '@/types/auth/user';

import { jwtDecode } from 'jwt-decode';
import { ROLES } from '@/utils/enums/Roles';
import { fetchMe } from '@/utils/api/auth.service';

export function useAuth() {

  const store = useAuthStore()
  const {user} = storeToRefs(store);

  const loading = ref(false);
  const errorLogin = ref('')
  const errorIndemin = ref(false);

  const me = async() => {
    try{
      const token = localStorage.getItem('token');

      const response = await fetchMe(token);

      if(response.status != 200) {
        const errData = await response.json()
        await logout();
        throw new Error(errData.message);
      }

      const data = await response.json();

      const userData: User = userMapper({...data, access_token: token})

      store.setUser(userData);

    }catch(err: any){
      console.log(err);
    }finally{

    }
  }

  const checkRoleAdmin = ():boolean => {
    if(!user.value) return false;
    if(!user.value.roles.includes(ROLES.ADMIN)){
      return false;
    }

    return true;
  }

  const isAuthenticated = async (): Promise<boolean> => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    if(user.value === null) {
      await me();
    }

    try {
      const decoded: any = jwtDecode(token);
      const now = Date.now() / 1000;
      return decoded.exp > now;
    } catch {
      return false;
    }
  }

  const login = async (name:string,  credential: string, type: 'pin' | 'password' ) => {
    loading.value = true;
    errorLogin.value = '';
    errorIndemin.value = false;
    try{
      const bodyData = {
        name,
        [type]: credential
      };
      const response = await fetch(`${API_URL}/auth/login`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      })

      const data = await response.json();
      console.log(data.code);
      if(data.code === "external_service_error"){
        errorLogin.value = data.message;
        errorIndemin.value = true;
        throw new Error(data.message);
      }
      if(response.status != 200) {
        errorLogin.value = 'Credenciales inválidas, por favor inténtalo de nuevo.'
        throw new Error(errorLogin.value);
      }


      if(data.access_token){
        localStorage.setItem('token',data.access_token)
      }

      await me();
    }catch(err:any){
      console.log(err);
    }finally {
      loading.value = false
    }
  }

  const logout = () => {
    store.clearUser();
    localStorage.removeItem('token')
  }


  return {
    user,
    loading,
    errorLogin,
    errorIndemin,

    login,
    logout,
    checkRoleAdmin,

    isAuthenticated
  }

}
