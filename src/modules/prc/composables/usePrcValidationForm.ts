import { usePrcStore } from "@/stores/prc/prc.store";
import type { ErrorPrc } from "@/types/prc/errorPrc";
import type { FormPrc } from "@/types/prc/prcForm";
import { fetchDeletePrc, fetchGetPrcs } from "@/utils/api/prc/prc.service";
import { storeToRefs } from "pinia";
import { ref } from "vue";


export function usePrcValidationForm() {

  const validation = (formPrc: FormPrc): ErrorPrc[] => {
    const errors: ErrorPrc[] = [];
    console.log(formPrc);
    if(formPrc.name.length <= 0){
      errors.push({
        name:'name',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.program_detail.activity_id == 0){
      errors.push({
        name:'activity_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.program_detail.company_id == 0){
      errors.push({
        name:'company_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.program_detail.department_id == 0){
      errors.push({
        name:'department_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.program_detail.equipment_id == 0){
      errors.push({
        name:'equipment_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.program_detail.management_id == 0){
      errors.push({
        name:'management_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.program_detail.observed_task_id == 0){
      errors.push({
        name:'observed_task_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.program_detail.position_id == 0){
      errors.push({
        name:'position_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.program_detail.worksite_id == 0){
      errors.push({
        name:'worksite_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.template_form_id == 0){
      errors.push({
        name:'template_form_id',
        error: 'El campo es obligatorio'
      })
    }
    if(formPrc.start_date == ''){
      errors.push({
        name:'start_date',
        error: 'El campo es obligatorio'
      })
    }

    return errors;
  }


  return {
    validation
  }
}
