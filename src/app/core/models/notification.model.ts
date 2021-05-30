export interface INotification {
  message: string
  type: ENotificationType
}

export enum ENotificationType {
  INFO,
  WARN,
  ERROR
}
