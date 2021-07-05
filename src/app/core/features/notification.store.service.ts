import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ENotificationType, INotification, NOTIFICATION_DEFAULT } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class NotificationStoreService {

  private readonly _notifications$ = new BehaviorSubject<INotification[]>([])
  readonly notifications$ = this._notifications$.asObservable()

  constructor() { }

  addInfoNotification(messageI18n: string, messageKeyI18n = {}, duration = NOTIFICATION_DEFAULT.duration): void {
    this.addNotification(messageI18n, ENotificationType.INFO, messageKeyI18n, duration);
  }

  addWarnNotification(messageI18n: string, messageKeyI18n = {}, duration = NOTIFICATION_DEFAULT.duration): void {
    this.addNotification(messageI18n, ENotificationType.WARN, messageKeyI18n, duration);
  }

  addErrorNotification(messageI18n: string, messageKeyI18n = {}, duration = NOTIFICATION_DEFAULT.duration): void {
    this.addNotification(messageI18n, ENotificationType.ERROR, messageKeyI18n, duration);
  }

  private addNotification(messageI18n: string, type: ENotificationType, messageKeyI18n: { [key: string]: string | number | boolean }, duration: number): void {
    const notification: INotification = {
      messageI18n,
      messageKeyI18n,
      duration,
      type
    };

    this._notifications$.next([ ...this._notifications$.value, notification ]);
  }
}
