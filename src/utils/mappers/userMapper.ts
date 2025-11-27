import type { User, UserResponse } from "@/types/user";

export const mapUserResponseToUser = (response: UserResponse): User => {
  return {
    ...response,
    role: {id: response.roles[0].id, name:response.roles[0].name }, // toma el primer rol o un valor por defecto
  };
};

export const mapUserListResponse = (responses: UserResponse[]): User[] => {
  return responses.map(mapUserResponseToUser);
};
