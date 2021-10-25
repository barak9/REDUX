import React, { Component } from 'react';
import Animbutton from './Animbutton.js'


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity
  
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "correctoption" : "option2",
      "options" : {
        "option1" : "Index error",
        "option2" : "' '",
        "option3" : "'Tutorials Point'",
        "option4" : "Syntax error"
      },
      "question" : "What is the output for 'Tutorials Point' [100:200]??"
    },
    "question2" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "We cannot remove an element from set.",
          "option2" : "Method is executed but no exception is raised.",
          "option3" : " Key error is raised.",
          "option4" : "There doesn’t exist such method as remove."
        },
      "question" : "Suppose we have a set a = {10,9,8,7}, and we execute a.remove(14) what will happen ??"
    },
    "question3" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "L.shuffle()",
          "option2" : "random.shufflelist(L)",
          "option3" : "shuffle(L)",
          "option4" : "random.Shuffle(L)"
        },
      "question" : "What command is used to shuffle a list ‘L’?"
    },
    "question4" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Now you can assign int value to x",
          "option2" : "x contains a reference to a Circle object",
          "option3" : "x actually contains an object of type Circle",
          "option4" : "x contains an int value"
        },
      "question" : "Which of the following is more accurate for the following declaration?"
    },
    "question5" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Turtle",
          "option2" : "Canvas",
          "option3" : "Tkinter",
          "option4" : "Graphics"
        },
      "question" : "Which module is used in python to create Graphics?"
    }
  }
}
}
export default class Pquiz extends Component {
  constructor(props){
    super(props);
    this.qno = 0 
    this.score = 0

    const jdata = jsonData.quiz.quiz1
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      question : arrnew[this.qno].question,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0,
     
    }

  }



  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++

      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score)
     }
  }
  _answer(status,ans, correctoptions){

    if(status == true){
     
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
      

        if(ans == this.state.correctoption ){

          this.score += 1
          

          if(this.score >=5){
            this.score=5
        
            
          }
          if(this.qno < arrnew.length-1){
      this.qno++

      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score)
     }
          
        }

  if(ans != this.state.correctoption ){

          this.score += 0
          

          
          if(this.qno < arrnew.length-1){
      this.qno++

      this.setState({ countCheck: 0, question: arrnew[this.qno].question, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score)
     }
          
        }

      }
      

  }
  render() {
    let _this = this
    var btnStyle = {
		backgroundColor: 'gray'
	}
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      return (  <View key={k} style={{margin:10}}>

        <Animbutton countCheck={_this.state.countCheck} onColor={"green"}  _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]} />
  






      </View>)
    });
    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 50}}>
      <View style={styles.container}>


      <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>

      <View style={styles.oval} >
        <Text style={styles.welcome}>
          {this.state.question}
        </Text>
     </View>
        <View>
        { options }
        </View>
        <View style={{flexDirection:"row"}}>
     

        <View style={{margin:15}} />
   <TouchableOpacity onPress={() => this.prev()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, marginRight: 12, paddingLeft: 20, borderRadius:10, backgroundColor:"green"}}>
            <Icon name="md-arrow-round-back" size={30} color="white" />
          </View>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => this.next()} >
          <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 20, marginLeft: 16,paddingLeft: 20, borderRadius:10, backgroundColor:"green"}}>
            <Icon name="md-arrow-round-forward" size={30} color="white" />
          </View>
        </TouchableOpacity >

        </View>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  oval: {
  width: width * 90/100,
  borderRadius: 20,
  backgroundColor: 'green'
  },
  container: {
   
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 0,
  },
}); 