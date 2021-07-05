export interface INotification {
  messageI18n: string
  messageKeyI18n?: { [key: string]: string | number | boolean },
  type: ENotificationType
  duration: number
}

export enum ENotificationType {
  INFO,
  WARN,
  ERROR
}

export const NOTIFICATION_DEFAULT: INotification = {
  messageI18n: '',
  messageKeyI18n: {},
  type: ENotificationType.INFO,
  duration: 10
}
