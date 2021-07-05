import { Component, Inject, OnInit } from '@angular/core';

import { NotificationStoreService } from '@core/features';
import { IUserFacade, USER_FACADE } from '@core/ng-features';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public notificationStoreService: NotificationStoreService,
    @Inject(USER_FACADE) public userFacade: IUserFacade,
  ) {}

  ngOnInit(): void {
    this.userFacade.init();
  }
}
