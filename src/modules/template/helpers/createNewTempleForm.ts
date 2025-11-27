import type { SectionForm, TemplateForm } from "@/types/template/template"
import { createNewSection } from "./createNewSection"

export const createNewTempleForm = (): TemplateForm => {
  return {
    id:0,
    name:'',
    error_name: false,
    description:'',
    error_description: false,
    uses:0,
    form_sections:[createNewSection()]
  }
}
