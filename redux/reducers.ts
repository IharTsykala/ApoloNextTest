import { combineReducers } from 'redux'
import {pagesReducer} from "./page/reducer";
import {securityReducer} from "./security/reducer";
import {loadingReducer} from "./loading/loading.reducer";

const reducers = {
  pages: pagesReducer,
  security: securityReducer,
  loading: loadingReducer
}

export default combineReducers(reducers)