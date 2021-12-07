import { Action } from "../store";
import {ActionTypes} from "./actions";
import {getLogInUserStatus} from "../../services/reduxServices/securityReducerServices/securityReducerServices";
import {RootState} from "../../pages/_app";

export interface State {
  logInUserStatus: boolean;
  token: string;
}

const initialState: State = {
  logInUserStatus: false,
  token: ""
}

export const securityReducer = (state: State = initialState, {type, payload}: Action<never>) => {
  switch (type) {
    case ActionTypes.SET_LOGIN_USER:
      return { ...state, logInUserStatus: getLogInUserStatus(true), token: payload }
    case ActionTypes.GET_LOGOUT_USER:
      localStorage.setItem("token", "")
      return { ...state, logInUserStatus: getLogInUserStatus(false), token: ""}
    default:
      return state
  }
}

//it needs to move to service for interfaces
export const securitySelector = (state: RootState) => state.security

export interface SecurityInterface {
  logInUserStatus: boolean
  [key: string]: any
}