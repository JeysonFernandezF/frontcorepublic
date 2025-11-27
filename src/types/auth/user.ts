export interface User{
  id:number,
  email:string,
  name:string,
  roles: string[],
  permissions: string[],
  token:string
}

export const userMapper = (data: any): User => {
  return {
    id: data.user?.id ?? 0,
    email: data.user?.email  ?? '',
    name: data.user?.name ?? '',
    roles: data.roles ?? [],
    permissions: data.permissions ?? [],
    token: data.access_token
  }
}
