import type { SectionForm } from "@/types/template/template"

export const createNewSection = (): SectionForm => {
  return {
    id:new Date().toDateString(),
    name:'',
    error_name: false,
    form_questions: [
      {
        id:new Date().toDateString(),
        error_question: false,
        question:''
      }
    ]
  }
}
