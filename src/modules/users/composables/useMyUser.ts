import { useAuthStore } from "@/stores/auth.store"
import { storeToRefs } from "pinia";

const useMyUser = () => {

  const store = useAuthStore()
  const {user} = storeToRefs(store);

  return {
    user,
  }
}


export default useMyUser;
