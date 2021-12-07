import { Action } from "../store";
import {ActionTypes} from "./actions";
import {getIndexCurrentPage} from "../../services/reduxServices/pageReducerServices/pageReducerServices";

export interface State {
  indexCurrentPage: number;
}

const initialState: State = {
  indexCurrentPage: 0
}

export const pagesReducer = (state: State = initialState, action: Action<never>) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_INDEX_PAGE:
      return { ...state, indexPage: getIndexCurrentPage(state.indexCurrentPage, 1)}
    case ActionTypes.DECREMENT_INDEX_PAGE:
      return { ...state, indexPage: getIndexCurrentPage(state.indexCurrentPage, -1)}
    default:
      return state
  }
}


