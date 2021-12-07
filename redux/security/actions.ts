import {Action} from "../store";
import {PayloadLoginUserSagaInterface} from "./saga";

export const ActionTypes = {
  GET_LOGIN_USER: "[SECURITY] get login user",
  SET_LOGIN_USER: "[SECURITY] set login user",
  GET_LOGOUT_USER: "[SECURITY] get logout user"
}

export const getLoginUser = (payload: PayloadLoginUserSagaInterface ): Action<PayloadLoginUserSagaInterface> => ({
  type: ActionTypes.GET_LOGIN_USER,
  payload
})

export const setLoginUser = (payload: string ): Action<string> => ({
  type: ActionTypes.SET_LOGIN_USER,
  payload
})

export const getLogOutUser = (): Action<never> => ({
  type: ActionTypes.GET_LOGOUT_USER,
})