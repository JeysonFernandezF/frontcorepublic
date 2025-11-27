import { usePrcStore } from "@/stores/prc/prc.store";
import { updatePrcStatus } from "@/utils/api/prc/prc.service";
import { STATUS } from "@/utils/enums/StatusEnum";
import { ref } from "vue";

const usePrcChangeStatus = () => {

  const store = usePrcStore();

  const updateLoading = ref<boolean>(false);
  const updateConfirm = ref<boolean>(false);


  const handleStatusChange  = async (id: number, status: STATUS) => {
    updateLoading.value = true;
    updateConfirm.value = false;
    try{
      await updatePrcStatus(id, status);
      store.setRefetch(true);
      updateConfirm.value = true;

    }catch(err){
      throw new Error("Error al cambiar el rol")

    }finally{
      updateLoading.value = false
    }
  }

  return {
    updateLoading,
    updateConfirm,
    handleStatusChange,
  }

}


export default usePrcChangeStatus;
