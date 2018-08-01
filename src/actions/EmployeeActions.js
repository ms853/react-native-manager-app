import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE, 
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVED,
    EMPLOYEE_DELETED 
} from './types';
import firebase from "firebase";
import { Actions } from "react-native-router-flux";


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

export const employeeSave = ({ name, phone, shift, uid}) => {

    const db = firebase.database();
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        db.ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift }).then(() => {
            dispatch({type: EMPLOYEE_SAVED})
            Actions.pop({type: 'reset'});
            alert('Employee Information has been saved!');
            
        })
        .catch((error) => {
            alert(error);
        })
    }
}

export const deleteEmployee = ({uid}) => {
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.database();
    
    return(dispatch) => {
        db.ref(`/users/${userId}/employees/${uid}`)
        .remove()
        .then(() => {
            dispatch({type: EMPLOYEE_DELETED})
            Actions.pop({ype: 'reset'})
        });
    }
}