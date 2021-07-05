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

export const login = createAction(
  '[User app] Login',
  props<{ name: string, password: string }>()
)

export const logout = createAction(
  '[User app] Logout'
)

export const logoutSuccess = createAction(
  '[User app] Logout success'
)

export const loginSuccess = createAction(
  '[User app] Login success',
  props<{ token: string }>()
)

export const loginError = createAction(
  '[User app] Login error',
  props<{ error: Error }>()
)
