import type { Catalog } from "../catalog";


export interface Prc{
  id: number,
  name: string,
  start_date: string,
  status: string,
  form:Form,
  program_detail: ProgramDetail
}

interface Form {
  "id": number,
  "name": string,
}

export interface ProgramDetail{
  "activity": Catalog,
  "equipment": Catalog,
  "worksite": Catalog,
  "position": Catalog,
  "department": Catalog,
  "observed_task": Catalog,
  "management": Catalog,
  "company":Catalog,
}
