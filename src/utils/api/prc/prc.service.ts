import { API_URL, headers } from "../api";
import type { ResponsePagination, Response } from "@/types/response";
import type { Prc } from "@/types/prc/prc";
import type { STATUS } from "@/utils/enums/StatusEnum";

export const fetchGetPrcById = async (id:number): Promise<Response<Prc>>=> {
  const response = await fetch(`${API_URL}/program-registers/${id}`,{
    method:'GET',
    headers: headers(),
  })

  if(!response.ok) {
    throw new Error("Error al obtener prc");
  }
  return await response.json()
}

export const fetchGetPrcs = async (page:number = 1): Promise<ResponsePagination<Prc>> => {
  const response = await fetch(`${API_URL}/program-registers?page=${page}`, {
    method: "GET",
    headers: headers(),
  });
  if (!response.ok) {
    throw new Error("Error al obtener prc");
  }


  return await response.json();
};

export const fetchDeletePrc = async (id:number): Promise<Boolean> => {
  const response = await fetch(`${API_URL}/program-registers/${id}`, {
    method: "DELETE",
    headers: headers(),

  });

  if (!response.ok) {
    throw new Error("Error al obtener prc");
    return false;
  }

  return true;
}

export const updatePrcStatus = async (id:number, status: STATUS): Promise<Boolean> => {
  const response = await fetch(`${API_URL}/program-registers/${id}/change-status`, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({status})
  });

  if (!response.ok) {
    throw new Error("Error al obtener prc");
    return false;
  }

  return true;
}
