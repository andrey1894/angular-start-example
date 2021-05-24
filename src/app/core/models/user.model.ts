export interface IUser {
  id: number;
  name: string;
  role: EUserRole;
}

export enum EUserRole {
  ADMIN,
  USER
}
