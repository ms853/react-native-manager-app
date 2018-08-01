import React, { Component } from "react";
import Communications from "react-native-communications";
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, deleteEmployee } from "../actions";
import  EmployeeForm  from '../components/EmployeeForm';
import { Card, CardSection, Button, Confirm } from "./reusable";

class EmployeeEdit extends Component{
    
    //Initializing state for modal 
    state = { displayModal: false };

    componentWillMount() {
        //iterate over the employee prop object and over every key and value pair.
        //It will take all the attributes of employee and pre-filling the values to the form reducer.

        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
          });
    }

    buttonPressed = () => {
        const { name, phone, shift } = this.props;
        
        this.props.employeeSave({ 
            name, phone, shift, uid: this.props.employee.uid});
    }

    onAccept = () => {
        const { uid } = this.props.employee;
        this.props.deleteEmployee({ uid });
    }

    onDecline = () => {
        this.setState({ displayModal: false });
    }

    onTextPressed = () => {
        const { name, phone, shift } = this.props;
        
        //Call communcations function to text employee
        Communications.textWithoutEncoding(phone, `Hello ${name}, your upcomming shift is ${shift}!`);
    }

    render(){
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.buttonPressed.bind(this)}>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ displayModal: !this.state.displayModal})}>Dismiss Employee</Button>
                </CardSection>
                
                <Confirm
                    //visibility of this modal will be determined by the state
                    visible={this.state.displayModal} 
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}           
                >
                    Are you sure you want to delete this employee?
                </Confirm>

                <CardSection>
                    <Button onPress={this.onTextPressed.bind(this)}>Text Shift</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {

    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, deleteEmployee})(EmployeeEdit);