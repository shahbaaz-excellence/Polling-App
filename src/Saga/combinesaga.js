import { all,takeLatest } from "redux-saga/effects";
import {signUpSaga} from "./signupsaga";
// import {loginRequest} from "./loginsaga";
import * as actions from '../Redux/action/actions'

function* watchAllSaga(){
    yield takeLatest (actions.SignUpRequest,signUpSaga)
    // yield takeLatest(loginRequest)
}

export default function* rootSaga(){
    yield all ([watchAllSaga()]);
}