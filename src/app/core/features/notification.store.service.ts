import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ENotificationType, INotification } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class NotificationStoreService {

  private readonly _notifications$ = new BehaviorSubject<INotification[]>([])
  readonly notifications$ = this._notifications$.asObservable()

  constructor() { }

  addInfoNotification(message: string): void {
    this.addNotification(message, ENotificationType.INFO);
  }

  addWarnNotification(message: string): void {
    this.addNotification(message, ENotificationType.WARN);
  }

  addErrorNotification(message: string): void {
    this.addNotification(message, ENotificationType.ERROR);
  }

  private addNotification(message: string, type: ENotificationType): void {
    const notification: INotification = {
      message,
      type
    };

    this._notifications$.next([ ...this._notifications$.value, notification ]);
  }
}
