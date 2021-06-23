import { createAction, props } from '@ngrx/store'

import { IUserDto } from '@core/models'

export const getUser = createAction(
  '[User app] Get user'
)

export const getUserSuccess = createAction(
  '[User app] Get user success',
  props<{ user: IUserDto }>()
)

export const getUserError = createAction(
  '[User app] Get user error',
  props<{ error: Error }>()
)
