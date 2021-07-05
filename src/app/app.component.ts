import { Component } from '@angular/core';

import { NotificationStoreService } from '@core/features';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public notificationStoreService: NotificationStoreService) {}
}
