import { ref } from "vue"
import { defineStore } from "pinia"
import type { FormObservation } from "@/types/observation/form"


export const useFormStore = defineStore('form-store',()=>{

  const form = ref<FormObservation | null>()

  const setForm     = (newForm: FormObservation) => {form.value = newForm}

  return {
    form,
    setForm,
  }
})
