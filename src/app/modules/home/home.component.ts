import { Component, Inject, OnInit } from '@angular/core';

import { UserFacade, USER_FACADE } from '@core/ng-features';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(USER_FACADE) public userFacade: UserFacade) { }

  ngOnInit(): void {
    this.userFacade.getUser();
  }

}
