import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const SpinnerLoader = ({ size }) => {
 
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator style={{ height: 80 }} 
      size={size || 'large'} 
      color="#C00"  
      />
    
    </View>
  );
  
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { SpinnerLoader };


// import React, { Component } from 'react';

// export default class SpinnerExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <Spinner />
//           <Spinner color='red' />
//           <Spinner color='green' />
//           <Spinner color='blue' />
//         </Content>
//       </Container>
//     );
//   }
// }