import {combineReducers} from "redux";

import SignUpReducer from "./signupReducer";
import LoginReducer from "./loginreducer";
import PollListReducer from "./pollListReducer";
import DeletePollreducer from "./deletepollreducer";

const rootReducer = combineReducers({
    SignUpStatus: SignUpReducer,
    LoginStatus: LoginReducer,
    PollListStatus: PollListReducer,
    DeletePollstatus: DeletePollreducer,
});

export default rootReducer;