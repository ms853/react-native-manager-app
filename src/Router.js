import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from './components/LoginForm'
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";
import  EmployeeEdit  from "./components/EmployeeEdit";

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="authentication">
                    <Scene key="login" component={LoginForm} title="Please Log In" initial />
                </Scene>
                
                <Scene key="main">

                    <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle=" Add Employee"
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial
                    />

                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
                    
                </Scene>

            </Scene>
        </Router>
    );
};

export default RouterComponent; 

//NOTE - The initial prop indicates that the component with that prob should show first. 