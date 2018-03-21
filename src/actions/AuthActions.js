/**
 * This file is responsible for defining redux
 * -action creator methods. 
 * Action creators return action objects by default.
 */
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

//Action creator method.
export const onEmailChange = (text) => {
    return {
        //return an object
        type: EMAIL_CHANGED,
        //text because that is the data type of the value that is being updated.
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
//firebase authentication method is wrapped in a federal function.
export const loginUser = ({email, password}) => {

    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
            console.log(error);

            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
        
        });
    };
        
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
}
  
//Helper function to help us dispatch the action
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS, payload: user
    });

    //Once logged in it will direct me to the main page.
    Actions.main();
};