import type { Response, ResponsePagination } from "@/types/response";
import type { User, UserResponse } from "@/types/user";
import { API_URL, headers } from "./api";
import type { Catalog } from "@/types/catalog";

export const fetchUserList = async (page:number = 1): Promise<ResponsePagination<UserResponse>> => {
  const response = await fetch(`${API_URL}/users?page=${page}`, {
    method: "GET",
    headers: headers(),
  });
  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }
  return await response.json();
};

export const fetchRoles = async (): Promise<Response<Catalog[]>> => {
  const response = await fetch(`${API_URL}/roles`, {
    method: "GET",
    headers: headers(),
  });
  if (!response.ok) {
    throw new Error("Error al obtener roles");
  }

  return await response.json();
}

export const updateUserRole = async (userId:number, roles:string[]): Promise<Boolean> => {
  const response = await fetch(`${API_URL}/users/assign-roles`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({user_id:userId, roles: roles})
  });
  if (!response.ok) {
    throw new Error("Error al actualizar el rol");
  }

  return await response.json();
}
