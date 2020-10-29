import {takeLatest, put, call} from "redux-saga/effects";
import * as actions from "../Redux/constants";

import{ LoginSuccess, LoginError} from "../Redux/action/actions";
import axios from "axios";

export default function* loginSaga (action) {
    try{

    }catch(error){

    }
}

export function* loginRequest(){
    yield takeLatest(actions.Login_Request, loginSaga);
}