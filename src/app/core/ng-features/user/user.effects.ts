import { Injectable } from '@angular/core'
import { catchError, filter, map, mergeMap, tap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Router } from '@angular/router'

import { UserApiService } from '@core/api'
import { LocalStorageService } from '@core/services'

import * as USER_ACTIONS from './user.actions'

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
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
      : [
        USER_ACTIONS.saveToken({ token: '' }),
        USER_ACTIONS.getUserSuccess({ user: undefined })
      ]
    )
  ))

  login$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.login),
    mergeMap(({ name, password }) => this.userApiService.loginUser(name, password).pipe(
      map(token => USER_ACTIONS.loginSuccess({ token })),
      catchError(error => [
        USER_ACTIONS.loginError({ error })
      ])
    ))
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.logout),
    mergeMap(() => [
      USER_ACTIONS.saveToken({ token: '' }),
      USER_ACTIONS.getUserSuccess({ user: undefined }),
      USER_ACTIONS.logoutSuccess()
    ])
  ))

  loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.loginSuccess),
    mergeMap(({ token }) => [
      USER_ACTIONS.saveToken({ token }),
      USER_ACTIONS.getUser()
    ])
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

  saveToken$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.saveToken),
    tap(({ token }) => this.localStorageService.saveToken(token))
  ), { dispatch: false })

  getUserSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.getUserSuccess),
    filter(user => !!user),
    tap(() => this.router.navigateByUrl('/'))
  ), { dispatch: false })

  logoutSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.logoutSuccess),
    tap(() => this.router.navigateByUrl('/auth'))
  ), { dispatch: false })

}
