import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { onEmailChange, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, SpinnerLoader } from './reusable';
//import { Spinner } from "native-base";

class LoginForm extends Component{
    /*
    Helper function which will allow me to 
    call the action to update the values typed in by the user.
    */
    onEmailChange(text){  
        this.props.onEmailChange(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    
    /**
     *Helper method for pressing the login button, 
     it will invoke the action creator method. 
     */
    onButtonPress() {
        //Destructoring
        const { email, password } = this.props;
        this.props.loginUser({ email,password });
    }

    renderLoginButton() {
        if(this.props.loading) {
            return <SpinnerLoader size="large" />;
            
        }else{
            return (
            <Button onPress={this.onButtonPress.bind(this)}>
                login
            </Button>
            );
        }
    }

    render(){
        return(  
            <Card>

                <CardSection>
                    <Input 
                        label = "Email"
                        placeholder = "email@mail.com"
                        onChangeText={this.onEmailChange.bind(this)} //event handler
                        value={this.props.email} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry //this prop hides the value typed in.
                        label = "Password"
                        placeholder = "password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                {this.props.error}
                </Text>

                <CardSection>   
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
}; 

//map state function

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    //Returning the props from the authenticaiton state. 
    return{
        email,
        password,
        error,
        loading
    };
};
//need to implement a mapStateToProps function.
export default connect(mapStateToProps, { 
    onEmailChange, passwordChanged, loginUser 
})(LoginForm);