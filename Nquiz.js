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
      "correctoption" : "option4",
      "options" : {
        "option1" : "Amazon Machine Instances are sized at various levels and rented on a computing/hour basis",
        "option2" : "The metrics obtained by CloudWatch may be used to enable a feature called Auto Scaling",
        "option3" : "A number of tools are used to support EC2 services",
        "option4" : "None of the mentioned"
      },
      "question" : "Point out the wrong statement.?"
    },
    "question2" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "Amazon Relational Database Service",
          "option2" : "Amazon SimpleDB",
          "option3" : "Amazon Cloudfront",
          "option4" : "Amazon Associates Web Services"
        },
      "question" : "Which of the following is an edge-storage or content-delivery system that caches data in different physical locations?"
    },
    "question3" : {
      "correctoption" : "option3",
      "options" : {
          "option1" : "Amazon Elastic Compute Cloud",
          "option2" : "Amazon Simple Queue Service",
          "option3" : "Amazon Relational Database Service",
          "option4" : "Amazon Simple Storage System"
        },
      "question" : "Which of the following allows you to create instances of the MySQL database to support your Web sites?"
    },
    "question4" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "Amazon Elastic Cloud is a system for creating virtual disks(volume)",
          "option2" : "SimpleDB interoperates with both Amazon EC2 and Amazon S3",
          "option3" : "EC3 is an Analytics as a Service provider",
          "option4" : "None of the above"
        },
      "question" : "Point out the correct statement?"
    },
    "question5" : {
      "correctoption" : "option2",
      "options" : {
          "option1" : "CloudWatch",
          "option2" : "Amazon SimpleDB",
          "option3" : "Amazon Cloudfront",
          "option4" : "All of the mentioned"
        },
      "question" : "Which of the following is a structured data store that supports indexing and data queries to both EC2 and S3?"
    }
  }
}
}
export default class Nquiz extends Component {
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