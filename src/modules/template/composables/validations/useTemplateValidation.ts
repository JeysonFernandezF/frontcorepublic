import type {  TemplateForm } from "@/types/template/template";

export const useTemplateValidation = () => {

  const validateTemplate = (template:TemplateForm): boolean => {
    let existError = false;

    if(template.name.length == 0){
      template.error_name = true;
      existError = true;
    }
    if(template.description.length == 0){
      template.error_description = true;
      existError = true;
    }
    template.form_sections.forEach(section =>{
      if(section.name.length == 0){
        section.error_name = true;
        existError = true;
      }

      section.form_questions.forEach(question => {
        if(question.question.length == 0){
          question.error_question = true;
          existError = true;
        }
      })
    })

    return existError;
  }


  return {
    validateTemplate
  }
}

