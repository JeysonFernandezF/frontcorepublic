import type { CatalogPrc } from "@/types/prc/catalogPrc";
import type { Template } from "@/types/template/template";
import { computed } from "vue";


export function usePrcDataForm(catalogPrc: CatalogPrc, templatesPrc: Template[]) {

  const templates = computed(() => {
    return templatesPrc.map(e => ({
      value: e.id,
      label: e.name
    }));
  })
  const activities = computed(() => {
    return catalogPrc.activities.map(e => ({
      value: e.id,
      label: e.name
    }));
  });

  const companies = computed(() => {
    return catalogPrc.companies.map(e => ({
      value: e.id,
      label: e.name
    }));
  });

  const departments = computed(() => {
    return catalogPrc.departments.map(e => ({
      value: e.id,
      label: e.name
    }));
  });

  const equipments = computed(() => {
    return catalogPrc.equipments.map(e => ({
      value: e.id,
      label: e.name
    }));
  });

  const managements = computed(() => {
    return catalogPrc.managements.map(e => ({
      value: e.id,
      label: e.name
    }));
  });

  const observedTasks = computed(() => {
    return catalogPrc.observed_tasks.map(e => ({
      value: e.id,
      label: e.name
    }));
  });

  const positions = computed(() => {
    return catalogPrc.positions.map(e => ({
      value: e.id,
      label: e.name
    }));
  });

  const worksites = computed(() => {
    return catalogPrc.worksites.map(e => ({
      value: e.id,
      label: e.name
    }));
  });


  return {
    templates,
    activities,
    companies,
    departments,
    equipments,
    managements,
    observedTasks,
    positions,
    worksites,
  }

}
