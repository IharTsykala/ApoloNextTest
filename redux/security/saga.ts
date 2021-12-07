import { put, takeEvery } from "redux-saga/effects"
import { LoadingState } from "../../shared/constans/loading";
import {ActionTypes, setLoginUser} from "./actions";
import {setLoadingState} from "../loading/loading.action";

const getStringRequestLoginUser = (username: string, password: string) => ({variables: { User: { username, password } } })

type AddUserFuncType = ( {variables: { requestDescription } } : { variables : { requestDescription: {} } } ) => {}

export interface PayloadLoginUserSagaInterface {
  addUserFunc: AddUserFuncType
  nameUser: string,
  passportUser: string,
}

export interface PayloadSagaInterface<T> {
  payload: T
}

export interface ResponseInterface {
  data: {
    logIn: {
      access_token: string
    }
  }
}

function* loginUserSaga({ payload: { addUserFunc, nameUser, passportUser } }:
  PayloadSagaInterface<PayloadLoginUserSagaInterface> | any): Generator<PayloadSagaInterface<PayloadLoginUserSagaInterface> | unknown> {
  try {
    yield put(setLoadingState(LoadingState.Loading))
    const response: ResponseInterface | any = yield addUserFunc(getStringRequestLoginUser(nameUser, passportUser))
    yield put(setLoginUser(response?.data?.logIn?.access_token))
    yield localStorage.setItem("token", response?.data?.logIn?.access_token)
    yield put(setLoadingState(LoadingState.Loaded))
  } catch (e) {
    yield put(setLoadingState(LoadingState.Error))
  }
}

export default function* securitySaga() {
  yield takeEvery(ActionTypes.GET_LOGIN_USER, loginUserSaga)
}