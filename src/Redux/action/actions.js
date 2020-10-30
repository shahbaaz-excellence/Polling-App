import { createAction } from "redux-actions";
import * as actions from "../constants";

export const SignUpRequest = createAction(actions.SIGN_UP_REQUEST);
export const SignUpSuccess = createAction(actions.SIGN_UP_SUCCESS);
export const SignUpError = createAction(actions.SIGN_UP_ERROR);

export const LoginRequest = createAction(actions.LOGIN_REQUEST);
export const LoginSuccess = createAction(actions.LOGIN_SUCCESS);
export const LoginError = createAction(actions.LOGIN_ERROR);

export const PollListRequest = createAction(actions.POLL_LIST_REQUEST);
export const PollListSuccess = createAction(actions.POLL_LIST_SUCCESS);
export const PollListError = createAction(actions.POLL_LIST_ERROR);

export const DeletePollRequest = createAction(actions.DELETE_POLL_REQUEST);
export const DeletePollSuccess = createAction(actions.DELETE_POLL_SUCCESS);
export const DeletePollError = createAction(actions.DELETE_POLL_ERROR);