import type { TypeFormPrc } from "@/utils/enums/TypeFormPrc"
import type { Template } from "../template/template"

export interface FormPrc{
  type:TypeFormPrc,
  name:string,
  'start_date':string,
  'template_form_id':number,
  'template':Template,
  'program_detail': FormProgramDetail
  'area':boolean,
  'turn':boolean,
  'critical_risk':boolean
}

export interface FormProgramDetail{
  "activity_id": number,
  "equipment_id": number,
  "worksite_id": number,
  "position_id": number,
  "department_id": number,
  "observed_task_id": number,
  "management_id": number,
  "company_id":number,
}
