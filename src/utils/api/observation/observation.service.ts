import type { Template } from "@/types/template/template";
import { API_URL, headers } from "./../api";
import type { Response, ResponsePagination } from "@/types/response";
import type { Observation } from "@/types/observation/observation";
import type { FormObservation } from '../../../types/observation/form';


export const fetchGetObservation = async (observationId: number): Promise<Response<Observation>> => {
  const response = await fetch(`${API_URL}/observations/${observationId}`, {
    method: "GET",
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error("Error al obtener la observación");
  }


  return await response.json();
};

export const fetchGetFormObservation = async (observationId: number): Promise<FormObservation>=> {
  const response = await fetch(`${API_URL}/observations/${observationId}/form-with-answers`, {
    method: "GET",
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error("Error al obtener el formulario");
  }


  return await response.json();
};

export const fetchGetObservationsByPrc = async (prcId: number, page:number=1): Promise<ResponsePagination<Observation>>=> {
  const response = await fetch(`${API_URL}/observations/?prc_id=${prcId}&page=${page}`, {
    method: "GET",
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error("Error al obtener el formulario");
  }


  return await response.json();
};

export const deleteObservationById = async (observationId: number): Promise<Boolean>=> {
  const response = await fetch(`${API_URL}/observations/${observationId}`, {
    method: "DELETE",
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el formulario");
  }


  return await response.json();
};
