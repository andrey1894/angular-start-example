import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { NotificationStoreService } from '@core/features';
import { IUserFacade, USER_FACADE } from '@core/ng-features';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    public notificationStoreService: NotificationStoreService,
    @Inject(USER_FACADE) public userFacade: IUserFacade,
  ) {}

  private destroy$ = new Subject();


  ngOnInit(): void {
    this.userFacade.init();

    this.userFacade.error$.pipe(
      map(error => error?.message || ''),
      filter(message => !!message),
      takeUntil(this.destroy$)
    ).subscribe(message => this.notificationStoreService.addErrorNotification(message))
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
