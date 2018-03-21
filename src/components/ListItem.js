import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./reusable";

class EmployeeListItem extends Component{

    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employees;
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}> 
                            {name} 
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default EmployeeListItem;