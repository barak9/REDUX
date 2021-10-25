import React from 'react';
//import react in our code.

import { View, Text, StyleSheet, Image } from 'react-native';
//import all the components we are going to use.

export default class Action extends React.Component {

  render() {
    return (
      <View style={styles.container}>
     
        <Text style={styles.boldText}>Welcome to Location Page</Text>
        
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
});
