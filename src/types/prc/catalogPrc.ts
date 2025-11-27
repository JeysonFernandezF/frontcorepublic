import type { Catalog } from "../catalog"

export interface CatalogPrc {
  activities: Catalog[],
  companies: Catalog[],
  departments: Catalog[],
  equipments: Catalog[],
  managements: Catalog[],
  observed_tasks: Catalog[]
  positions: Catalog[],
  worksites: Catalog[]
}
