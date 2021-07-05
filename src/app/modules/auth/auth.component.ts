import { Component, Inject, OnInit } from '@angular/core';

import { USER_FACADE, IUserFacade } from '@core/ng-features';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(@Inject(USER_FACADE) public userFacade: IUserFacade) { }

  ngOnInit(): void { }

  login({ name, password }: { name: string, password: string }): void {
    this.userFacade.login(name, password);
  }

}
