import type { ROLES } from "./enums/Roles";

export function validationRoles(userRole: string, roleOrRoles: ROLES[]): boolean {
  if (Array.isArray(roleOrRoles)) {
    return roleOrRoles.includes(userRole as ROLES);
  }
  return false;
}
