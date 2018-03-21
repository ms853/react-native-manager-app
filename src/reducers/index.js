import { combineReducers } from 'redux';
import authReducer from './authReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer 
});