import type { Template } from "@/types/template/template";
import { API_URL, headers } from "../api";
import type { ResponsePagination, Response } from "@/types/response";
import type { CatalogPrc } from "@/types/prc/catalogPrc";
import type { FormPrc } from "@/types/prc/prcForm";

export const fetchGetPrcById = async (id:number) => {
  const response = await fetch(`${API_URL}/template-forms/${id}`,{
    method:'GET',
    headers: headers(),
  })

  if(!response.ok) {
    throw new Error("Error al obtener templates");
  }

  return await response.json()
}

export const fetchGetCatalogPrc = async (): Promise<CatalogPrc> => {
  const response = await fetch(`${API_URL}/program-registers/catalog`,{
    method:'GET',
    headers: headers(),
  })
  if (!response.ok) {
    throw new Error("Error al obtener catalog");
  }

  const data = await response.json();
  return data;
}
export const fetchGetTemplatesPrc = async (): Promise<Response<Template[]>> => {
  const response = await fetch(`${API_URL}/template-forms/without-paginate`,{
    method:'GET',
    headers: headers(),
  })
  if (!response.ok) {
    throw new Error("Error al obtener templates");
  }

  const data = await response.json();
  return data;
}


export const fetchPostPrc = async (newPrc:FormPrc) => {
  const response = await fetch(`${API_URL}/program-registers/with-details`,{
    method:'POST',
    headers: headers(),
    body: JSON.stringify({...newPrc})
  });

  if(response.status != 201) {
    const errData = await response.json()
    throw new Error(errData.message);
  }

  return await response.json();
}

export const fetchGetTemplates = async (): Promise<ResponsePagination<Template>> => {
  const response = await fetch(`${API_URL}/template-forms`, {
    method: "GET",
    headers: headers(),
  });

  if (!response.ok) {
    throw new Error("Error al obtener templates");
  }


  return await response.json();
};

export const fetchDeleteTemplates = async (id:number): Promise<Boolean> => {
  const response = await fetch(`${API_URL}/template-forms/${id}`, {
    method: "DELETE",
    headers: headers(),

  });

  if (!response.ok) {
    throw new Error("Error al obtener templates");
    return false;
  }

  return true;
}
