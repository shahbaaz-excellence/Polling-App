import { all,takeLatest } from "redux-saga/effects";
import * as actions from '../Redux/action/actions';
import {signUpSaga} from "./signupsaga";
import { loginSaga } from "./loginsaga";
import { pollListSaga } from "./pollListsaga";
import {DeletePollSaga} from "./deletepollsaga";

function* watchAllSaga(){
    yield takeLatest (actions.SignUpRequest,signUpSaga)
    yield takeLatest (actions.LoginRequest,loginSaga)
    yield takeLatest(actions.PollListRequest,pollListSaga)
    yield takeLatest(actions.DeletePollRequest,DeletePollSaga)
}

export default function* rootSaga(){
    yield all ([watchAllSaga()]);
}