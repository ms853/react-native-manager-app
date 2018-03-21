import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS } from './types';
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import { DataSnapshot } from '@firebase/database';

//This method will take an object, which will have the key and value property
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

//Action creator for storing the employee data.
export const employeeCreate = ({ name, phone, shift }) => {
    //Get the current authenticated user
    const { currentUser } = firebase.auth();

    //returning a federal function in order to bypass the requirement for redux-thunk!
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        //The push method saves the props to the reference in the databse.
        .push({ name, phone, shift }) 
        //Once saved to the database, navigate back to the Employee List scene.
        //({ type: 'reset' }) - allows us to navigate to a scene without having a back button.
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE });  
            Actions.pop({ type: 'reset' });
          });
    };


}; 

//Method for fetching the employee data in the database 
//Then this data will be rendered to the Employee List component.
export const fetchEmployeeData = () => {
    
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        //the snapshot is the object that we use to describe the data.
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

