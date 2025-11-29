import { API_URL } from "./api";

export const fetchMe = async (token: string | null): Promise<Response> => {
  const response = await fetch(`${API_URL}/auth/me`,{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
  });

  return response;
};
