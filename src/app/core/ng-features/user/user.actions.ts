import { createAction, props } from '@ngrx/store'

import { IUserDto } from '@core/models'

export const init = createAction(
  '[User app] Init'
)

export const saveToken = createAction(
  '[User app] Save token',
  props<{ token: string }>()
)

export const getUser = createAction(
  '[User app] Get user'
)

export const getUserSuccess = createAction(
  '[User app] Get user success',
  props<{ user: IUserDto | undefined }>()
)

export const getUserError = createAction(
  '[User app] Get user error',
  props<{ error: Error }>()
)

export const loginUser = createAction(
  '[User app] Login user',
  props<{ name: string, password: string }>()
)

export const loginUserSuccess = createAction(
  '[User app] Login user success',
  props<{ token: string }>()
)

export const loginUserError = createAction(
  '[User app] Login user error',
  props<{ error: Error }>()
)
