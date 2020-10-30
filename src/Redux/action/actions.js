import { createAction } from "redux-actions";
import * as actions from "../constants";

export const SignUpRequest = createAction(actions.SIGN_UP_REQUEST);
export const SignUpSuccess = createAction(actions.SIGN_UP_SUCCESS);
export const SignUpError = createAction(actions.SIGN_UP_ERROR);

export const LoginRequest = createAction(actions.LOGIN_REQUEST);
export const LoginSuccess = createAction(actions.LOGIN_SUCCESS);
export const LoginError = createAction(actions.LOGIN_ERROR);