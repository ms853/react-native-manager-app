import React, { Component } from "react";
import { connect } from "react-redux";
import { Picker, Text, ScrollView } from "react-native";
import { employeeUpdate } from "../actions"
import { Card, CardSection, Input  } from "./reusable";

class EmployeeCreateForm extends Component {

    render(){

        return(
            <ScrollView>
                <Card>
                    <CardSection>
                        <Input 
                            label="Name"
                            placeholder="Enter Employee Name"
                            value={this.props.name}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        />    
                    </CardSection>
                        
                    <CardSection>
                        <Input 
                            label="Phone"
                            placeholder="000-0000-0000"
                            value={this.props.phone}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        />   
                    </CardSection>

                    <CardSection>
                        <Text style={ styles.pickerTitle }>Select Shift</Text>
    
                        <Picker
                            style={{ flex: 1, margin: 10 }}
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                        >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />     
                        </Picker>
                    </CardSection>

                </Card>
            </ScrollView>
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
    })(EmployeeCreateForm);