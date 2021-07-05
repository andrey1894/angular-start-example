import { Component, Input } from '@angular/core';

import { ENotificationType, INotification } from '@core/models';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  @Input() notifications: INotification[] | null = []
  notificationType = ENotificationType

}
