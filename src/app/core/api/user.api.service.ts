import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { EUserDtoRole, IUserDto } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor() { }

  getUser(): Observable<IUserDto> {
    const fakeUser: IUserDto = {
      id: 1,
      name: 'Test',
      role: EUserDtoRole.ADMIN
    }
    return of(fakeUser)
  }

  loginUser(name: string, password: string): Observable<string> {
    return name === 'test' && password === 'test'
      ? of('test')
      : throwError(new Error('Invalid name or password'))
  }

}
