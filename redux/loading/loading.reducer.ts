import { ActionTypes } from "./loading.action"
import {Action} from "../store";

export interface State {
  loadingState: string;
}

const initialState: State = {
  loadingState: "loaded",
}

export const loadingReducer = (state: State = initialState, {type, payload}: Action<String>) => {
  switch (type) {
    case ActionTypes.SET_LOADING_STATE:
      return { ...state, loadingState: payload }
    default:
      return state
  }
}
