export interface IUserDto {
  id: number;
  name: string;
  role: EUserDtoRole;
}

export enum EUserDtoRole {
  ADMIN,
  USER
}
