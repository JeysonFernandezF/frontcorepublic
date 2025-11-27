export interface Template {
  id:number,
  name: string,
  description:string,
  uses:number,
  form_sections: Section[]
}

export interface Section{
  id:string,
  name:string,
  form_questions:Question[]
}

export interface Question {
  id:string,
  question:string
}


/** Template Form */

export interface TemplateForm extends Template {
  error_name: boolean
  error_description: boolean
  form_sections: SectionForm[]
}

export interface SectionForm extends Section {
  error_name: boolean
  form_questions: QuestionForm[]
}

export interface QuestionForm extends Question {
  error_question: boolean
}
