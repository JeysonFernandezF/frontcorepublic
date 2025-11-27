import { ref } from "vue"
import { defineStore } from "pinia"

import { type CatalogPrc } from "@/types/prc/catalogPrc"
import { type FormPrc } from "@/types/prc/prcForm"
import { type Template } from "@/types/template/template"
import { TypeFormPrc } from "@/utils/enums/TypeFormPrc"


const initialForm = ():FormPrc => ({
  type: TypeFormPrc.CREATE,
    name:'',
    'start_date':'',
    'template_form_id':0,
    'template':{
        id:0,
        name: '',
        description:'',
        uses:0,
        form_sections: []
    },
    'program_detail': {
      "activity_id": 0,
      "equipment_id": 0,
      "worksite_id": 0,
      "position_id": 0,
      "department_id": 0,
      "observed_task_id": 0,
      "management_id": 0,
      "company_id":0,
    },
    'area':false,
    'turn':false,
    'critical_risk':false
})

export const usePrcFormStore = defineStore('prc-form-store',()=>{

  const catalogPrc = ref<CatalogPrc>({
    activities: [],
    companies: [],
    departments: [],
    equipments: [],
    managements: [],
    observed_tasks: [],
    positions: [],
    worksites: []
  })
  const templatesPrc = ref<Template[]>([])

  const formPrc = ref<FormPrc>(initialForm())

  const setCatalogPrc   = (newCatalogPrc: CatalogPrc) => {catalogPrc.value = newCatalogPrc;}
  const setTemplatesPrc = (templates: Template[])     => {templatesPrc.value = templates;}
  const resetForm = () => {
    formPrc.value = initialForm()
    console.log(formPrc.value)
    }


  return {
    catalogPrc,
    templatesPrc,
    formPrc,

    setCatalogPrc,
    setTemplatesPrc,
    resetForm
  }
})
