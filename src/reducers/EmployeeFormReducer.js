import {
    EMPLOYEE_UPDATE, EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);

    switch (action.type) {
        
        case EMPLOYEE_UPDATE:
            //NOTE - That here I return a new state and a key interpolation. 
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;    
        default:
            return state;
    }
};