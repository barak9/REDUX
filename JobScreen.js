import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class J extends React.Component{
render() {  
return(

  <View style={styles.jobs}>
      <View style={styles.jobsStyleOne}>
     
         <TouchableOpacity>
     <Text>Aws Jobs</Text>
  </TouchableOpacity>
      </View>
      
     
    
    </View>

)
}


}
const styles = StyleSheet.create ({
  


jobs: { 
     
   
    flexDirection: 'column',
    alignItems: 'stretch',
   
    justifyContent: 'center',


         

},
  jobsStyleOne: {

      justifyContent: 'center',
      textAlign: 'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.58,
shadowRadius: 8.00,
alignItems: 'center',

elevation: 14,
    marginTop: "5%",
    borderRadius: 20,
    backgroundColor: "#FDFEFE",
    overflow: 'hidden',
    marginBottom:20,
  height:160,
    
    margin: 14,
    paddingBottom: -68,
   
  }, 

})