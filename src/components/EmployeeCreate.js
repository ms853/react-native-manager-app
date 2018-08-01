import React, { Component } from "react";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions"
import { Card, CardSection, Input, Button  } from "./reusable";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreateForm extends Component {

    onButtonPress() {
        //First I will de-structure my props object
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render(){

        return(
            <Card>
                <EmployeeForm {...this.props} />
                
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );

    }
}

const mapStateToProps = (state) => {
    //retrieving states from combined reducer - employeeForm
    const { name, phone, shift } = state.employeeForm; 

    return { name, phone, shift };
};

//Styling for picker
const styles = {
    pickerTitle: {
        fontSize: 18,
        paddingLeft: 20 
    }
};


export default connect(mapStateToProps, { 
    employeeUpdate, 
    employeeCreate })(EmployeeCreateForm);