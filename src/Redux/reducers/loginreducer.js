import * as actions from "../constants"

const initialState = {
    isLoading: false,
    isLoggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.Login_Request:
            return {
                ...state,
                isLoading: true,
            };

        case actions.Login_Sucess:
            return {
                ...state,
                isLoggedIn: true,
                isLoading: false,
                response: action.payload.response,
            };

        case actions.Login_Error:
            return {
                isLoggedIn: false,
                isLoading: false,
                error: action.payload.error,
            };

        default:
            return state;
    }
}

export default LoginReducer;