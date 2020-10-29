import { all,takeLatest } from "redux-saga/effects";
import * as actions from '../Redux/action/actions';
import {signUpSaga} from "./signupsaga";
import { loginSaga } from "./loginsaga";

function* watchAllSaga(){
    yield takeLatest (actions.SignUpRequest,signUpSaga)
    yield takeLatest (actions.LoginRequest,loginSaga)
}

export default function* rootSaga(){
    yield all ([watchAllSaga()]);
}