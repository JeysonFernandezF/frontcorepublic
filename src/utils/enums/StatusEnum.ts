export enum STATUS {
  Active = 'active',
  Editable = 'Editable',
  Pending = 'pending',
  Terminado= 'completed',
  Pausado  = 'Pausado',
}

export const STATUS_LABELS: Record<STATUS, string> = {
  [STATUS.Active]: "Activo",
  [STATUS.Editable]: "Editable",
  [STATUS.Pending]: "En progreso",
  [STATUS.Terminado]: "Terminado",
  [STATUS.Pausado]: "Pausado",
};
