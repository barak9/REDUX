import React, { Component } from 'react';
import Bquiz  from './Bquiz.js';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


class Bootstrapquiz extends React.Component {
	




  constructor(props){
    super(props)
    this.state = {
      quizFinish : false,
      score: 0
    }
  }
  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  _quizFinish(score){    
    this.setState({ quizFinish: true, score : score })
  }
  _scoreMessage(score){
    if(score <= 2){
      return (
        <View style={styles.innerContainer}>
       
                <View style={{ flexDirection: "row"}} >
                  <Icon name="trophy" size={30} color="white" />
                </View>
              
                <Text style={styles.score}>You need to work hard</Text>
                <Text style={styles.score}>You scored {score}  out of 5</Text>
              </View>)
    }else if(score >= 3 && score <= 4){
      return (<View style={styles.innerContainer} >
                  <View style={{ flexDirection: "row"}} >
                    <Icon name="trophy" size={30} color="white" />
                    <Icon name="trophy" size={30} color="white" />
                  </View>
                 
                  <Text style={styles.score}>You are good</Text>
                  <Text style={styles.score}>Congrats you scored {score} out of 5 </Text>
                </View>)
    }else if(score >= 5){
      return (<View style={styles.innerContainer}>
                 <View style={{ flexDirection: "row"}} >
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                     <Icon name="trophy" size={30} color="white" />
                  </View>
                  
                  <Text style={styles.score}>You are the master</Text>
                  <Text style={styles.score}>Congrats you scored {score} out of 5  </Text>
                  
                </View>)
    }
  }
  render() {
    return (
      <View style={{flex:1,  fontSize: 20,
    fontStyle: 'italic'}}>
    
      

       { this.state.quizFinish ? <View style={styles.container}>
     
           <View style={styles.circle}>

             { this._scoreMessage(this.state.score) }
           </View>

       </View> :  <Bquiz quizFinish={(score) => this._quizFinish(score)} /> }

      </View>
    );
  }
}

export default Bootstrapquiz
const scoreCircleSize = 310
const styles = StyleSheet.create({
  score: {
    color: "white",
    fontSize: 20,
    fontStyle: 'italic'
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize/2,
    backgroundColor: "green"
  },
  innerContainer: {
  
  
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop:35,
     
    fontSize: 20,
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  toolbar:{
        
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
    },
    toolbarButton:{
        width: 55,
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1
    }
});