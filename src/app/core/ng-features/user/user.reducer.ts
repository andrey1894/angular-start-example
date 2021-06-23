import { Action, createReducer, on } from '@ngrx/store'

import { IUserDto } from '@core/models'

import * as USER_ACTIONS from './user.actions'

export const userFeatureKey = 'User app'

export interface IUserState {
  inRequest: boolean;
  inError: boolean;
  data: {
    user?: IUserDto;
    error?: Error;
  };
}

export const createUserInitState = (): IUserState => ({
  inRequest: false,
  inError: false,
  data: {}
})

export interface IAppWithUserState {
  user: IUserState;
}

export const createAppWithUiInitState = (): IAppWithUserState => ({
  user: createUserInitState()
})

export const userState = createReducer(
  createUserInitState(),

  on(USER_ACTIONS.getUser, state => ({ ...state, inRequest: true })),
  on(USER_ACTIONS.getUserSuccess, (state, { user }) => ({ ...state, inRequest: true, data: { user }})),
  on(USER_ACTIONS.getUserError, (state, { error }) => ({
    ...state,
    inRequest: false,
    inError: true,
    data: { user: undefined, error }
  })),

)

export const userReducer = (state: IUserState, action: Action): IUserState => userState(state, action)
