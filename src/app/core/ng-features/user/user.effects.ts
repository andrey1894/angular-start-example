import { Injectable } from '@angular/core'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import { UserApiService } from '@core/api'

import * as USER_ACTIONS from './user.actions'

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userApiService: UserApiService,
  ) {}

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(USER_ACTIONS.getUser),
    mergeMap(() => this.userApiService.getUser().pipe(
      map(user => USER_ACTIONS.getUserSuccess({ user })),
      catchError(error => [
        USER_ACTIONS.getUserError({ error })
      ])
    ))
  ))

}
