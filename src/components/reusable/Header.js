//Import library
import React from 'react';
import { Text, View, StyleSheet } from 'react-native'; 

//Make Component

 /*When you have single line of JSX code
   then it is okay to have the return
    statement on the same line.
    */
  

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text>
                <Text style={styles.textStyle}>{props.headerText}</Text>
             </Text>
        </View>
    );
};

//We make a new component for styling the header.
const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.9, //How heavy the darkness of the shadow should be.
        elevation: 4,
        position: 'relative'
    },

    textStyle: {
        fontSize: 25
    }
});

//Make the component available to other parts of the app.
//Export it as object
export { Header };
