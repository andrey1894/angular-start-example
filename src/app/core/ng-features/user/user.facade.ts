import { Injectable, InjectionToken } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { IUserDto } from '@core/models'

import * as USER_ACTIONS from './user.actions'
import { IAppWithUserState } from './user.reducer'
import {
  selectUser,
  selectUserError,
  selectUserInError,
  selectUserInRequest,
} from './user.selectors'

export interface IUserFacade {

  inRequest$: Observable<boolean>
  inError$: Observable<boolean>
  user$: Observable<IUserDto | undefined>
  error$: Observable<Error | undefined>

  getUser(): void

}

export const USER_FACADE = new InjectionToken<IUserFacade>('USER_FACADE')

@Injectable()
export class UserFacade implements IUserFacade {

  inRequest$ = this.store$.select(selectUserInRequest)
  inError$ = this.store$.select(selectUserInError)
  error$ = this.store$.select(selectUserError)
  user$ = this.store$.select(selectUser)

  constructor(private store$: Store<IAppWithUserState>) {}

  getUser(): void {
    this.store$.dispatch(USER_ACTIONS.getUser())
  }

}
