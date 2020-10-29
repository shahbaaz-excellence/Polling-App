import {combineReducers} from "redux";

import SignUpReducer from "./signupReducer";
import LoginReducer from "./loginreducer";

const rootReducer = combineReducers({
    SignUpStatus: SignUpReducer,
    LoginStatus: LoginReducer,
});

export default rootReducer;