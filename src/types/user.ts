import type { Catalog } from "./catalog";

export interface User{
  id:number;
  name:string;
  role:Role;
}

export interface UserResponse extends Omit<User, 'role'>{
  roles:Role[];
}

export interface Role{
  id:number;
  name:string;
}

export interface ChangeRole{
  id:number,
  roles:string[],
}



