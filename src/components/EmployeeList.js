import _ from 'lodash'; //helper library which helps with object to array conversion.
import React, { Component } from "react";
import { ListView, View, Text } from "react-native";
import { connect } from 'react-redux';
import { fetchEmployeeData } from '../actions';
import EmployeeListItem from "./ListItem";

//Whenever the user navigates back here, they will render
//a new instance of employee list. 
class EmployeeList extends Component {

    componentWillMount() {
        this.props.fetchEmployeeData();
    
        this.createDataSource(this.props);
      }
    
      componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props
    
        this.createDataSource(nextProps);
      }
    
      createDataSource({ employees }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
    
        this.dataSource = ds.cloneWithRows(employees);
      }
    
      renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
      }
    
      render() {
        return (
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        );
      }
    }
    
//state.employees is an object which & has many key value pairs
//for each key value pair, run this faderal function will be called 
//with each key value pair. This will be stored like this {shift: 'some', email:'some', name:'some' } 
//in every iteration. Once map executes a federal function 
 
const mapStateToProps = state => {
    console.log(state.employees);
    const employees = _.map(state.employees, (val, uid) => {
        
        
        
        return { ...val, uid };
    });
  
    return { employees };
    console.log(employees);
  };

export default connect(mapStateToProps, { fetchEmployeeData })(EmployeeList);