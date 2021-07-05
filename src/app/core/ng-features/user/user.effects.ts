import { Injectable } from '@angular/core'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import { UserApiService } from '@core/api'
import { LocalStorageService } from '@core/services'

import * as USER_ACTIONS from './user.actions'

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService,
    private localStorageService: LocalStorageService,
  ) {}

  init$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.init),
    map(() => this.localStorageService.getToken()),
    mergeMap(token => token
      ? [
        USER_ACTIONS.saveToken({ token }),
        USER_ACTIONS.getUser()
      ]
      : [USER_ACTIONS.saveToken({ token: '' })]
      )
  ))

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.getUser),
    mergeMap(() => this.userApiService.getUser().pipe(
      map(user => USER_ACTIONS.getUserSuccess({ user })),
      catchError(error => [
        USER_ACTIONS.getUserError({ error })
      ])
    ))
  ))

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.loginUser),
    mergeMap(({ name, password }) => this.userApiService.loginUser(name, password).pipe(
      map(token => USER_ACTIONS.loginUserSuccess({ token })),
      catchError(error => [
        USER_ACTIONS.loginUserError({ error })
      ])
    ))
  ))

}
