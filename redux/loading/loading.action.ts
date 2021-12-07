import { Action } from "../store"

export const ActionTypes = {
  SET_LOADING_STATE: "[Loading] set Loading state",
  SET_LOADING_BUTTON_STATE: "[Loading] set Loading button state",
}

export const setLoadingState = (loadingState: string): Action<string> => ({
  type: ActionTypes.SET_LOADING_STATE,
  payload: loadingState,
})

