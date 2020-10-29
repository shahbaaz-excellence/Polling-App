import * as actions from "../action/actions";

const initialState = {
    isLoading: false,
    isSignedUp: false,
};

const SignUpReducer = (state = initialState, action) => {
    console.log(action.payload,"LLLLLLLLLLLLLLLLLL")
    switch (action.type) {
        case actions.SignUpRequest:
            return {
                ...state,
                isLoading: true,
            };

        case actions.SignUpSuccess:
            return {
                ...state,
                isSignedUp: true,
                isLoading: false,
                response: action.payload,
            };

        case actions.SignUpError:
            return {
                ...state,
                isSignedUp: false,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

export default SignUpReducer;