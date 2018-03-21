import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actions/types";

//email as an empty object
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};
//auth reducer 
export default (state = INITIAL_STATE, action) => {
    //print out the action.
    console.log(action);

    switch(action.type){
        case EMAIL_CHANGED: 
        //here is where the logic is handled when the email changes.
        //This will overwrite the content of the state. 
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload };
        case LOGIN_USER: 
            return { ...state, loading: true, error: '' }    
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };       
        default: 
            return state;
    }
};
