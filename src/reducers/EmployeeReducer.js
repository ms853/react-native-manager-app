import { EMPLOYEE_FETCH_SUCCESS } from '../actions/types'

//using object as our initial state
const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMPLOYEE_FETCH_SUCCESS:
            console.log(action); 
            return action.payload; //outputs the value retrieved from the database.
        default:
            return state; 
    }
};