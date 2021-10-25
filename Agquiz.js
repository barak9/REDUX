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
      "correctoption" : "option3",
      "options" : {
        "option1" : "pipeName",
        "option2" : "pipeDeco",
        "option3" : "Pipe",
        "option4" : "None"
      },
      "question" : "The ...... decorator allows us to define the pipe name that is globally available for use in any template in the across application?"
    },
    "question2" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "synchronous",
          "option2" : "asynchronous",
          "option3" : "Both asynchronous & synchronous",
          "option4" : "None of above"
        },
      "question" : "Observables help you manage ....... data?"
    },
    "question3" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "true",
          "option2" : "false"
        
        },
      "question" : "Child controller inherits the scope of its parent controller?"
    },
    "question4" : {
      "correctoption" : "option4",
      "options" : {
          "option1" : "ng-controller directive tells AngularJS what controller to use with this view.",
          "option2" : "AngularJS application mainly relies on controllers to control the flow of data in the application",
          "option3" : "A controller is a JavaScript object containing attributes/properties and functions.",
          "option4" : "All of the above."
        },
      "question" : "Which of the following is true about ng-controller directive?"
    },
    "question5" : {
      "correctoption" : "option1",
      "options" : {
          "option1" : "Embed HTML pages within a HTML page using ng-include directive",
          "option2" : "Embed JS files within a HTML page using ng-include directive",
          "option3" : "Both of the above",
          "option4" : "None of the above"
        },
      "question" : "Which of the following is true about ng-include directive?"
    }
  }
}
}
export default class Agquiz extends Component {
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