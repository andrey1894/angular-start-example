import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EUserDtoRole, IUserDto } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor() { }

  getUser(): Observable<IUserDto> {
    const fakeUser: IUserDto = {
      id: 1,
      name: 'User',
      role: EUserDtoRole.ADMIN
    }
    return of(fakeUser)
  }

}
