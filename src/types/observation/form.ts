
export interface FormObservation{
  formulario:DetailsForm,
}

export interface DetailsForm{
  nombre:string,
  secciones: Section[]
}

export interface Section{
  nombre: string,
  preguntas: Question[]
}

export interface Question{
  "id": 1,
  "nombre": string,
  "record_question": RecordQuestion
}

export interface RecordQuestion{
  "conducta"?: string,
  "barrera"?: string,
  "notes"?: string
}
