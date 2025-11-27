import type { Catalog } from "../catalog"

export interface Observation {
  "id": number,
  "people_observed": number,
  "observed_at": string,
  "scheduled_at": string,
  "date_in":string,
  "date_end": string,
  "comments": string,
  "created_at": string,
  "updated_at": string,
  "user": User,
  "area": Catalog,
  "critical_risk": Catalog,
  "turn": Catalog,
  "program_register": Catalog
}

export interface User{
  "id": number,
  "name": string,
  "email": string,
}




