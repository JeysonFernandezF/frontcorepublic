import type { Template } from "@/types/template/template";
import { API_URL, headers } from "./api";
import type { ResponsePagination } from "@/types/response";

export const fetchGetTemplateById = async (id:number) => {
  const response = await fetch(`${API_URL}/template-forms/${id}`,{
    method:'GET',
    headers: headers(),
  })

  if(!response.ok) {
    throw new Error("Error al obtener templates");
  }

  return await response.json()
}

export const fetchEditTemplate = async (id:number, newTemplate: Template) => {
  const response = await fetch(`${API_URL}/template-forms/${id}`,{
    method:'PUT',
    headers: headers(),
    body: JSON.stringify({...newTemplate})
  })
  console.log(response);
  return await response.json();
  if(response.status != 204) {
    const errData = await response.json()
    throw new Error(errData.message);
  }
}

export const fetchPostTemplate = async (newTemplate:Template) => {
  const response = await fetch(`${API_URL}/template-forms`,{
    method:'POST',
    headers: headers(),
    body: JSON.stringify({...newTemplate})
  });

  if(response.status != 201) {
    const errData = await response.json()
    throw new Error(errData.message);
  }

  return await response.json();
}

export const fetchGetTemplates = async (page:number = 1): Promise<ResponsePagination<Template>> => {
  const response = await fetch(`${API_URL}/template-forms?page=${page}`, {
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
