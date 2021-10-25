import React, { Component, useState, useEffect, useRef } from 'react';
import { Button, View, Text, TouchableOpacity, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { WebView } from "react-native-webview";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Notifications from './Notifications';
import Action from './Action.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bootstrapquiz from './Bootstrapquiz';
import Playquiz from './Playquiz.js'
import JobScreen from './JobScreen.js'
import Awsquiz from './Awsquiz.js';
import Pythonquiz from './Pythonquiz';
import Nodequiz from './Nodequiz';
import Angularquiz from './Angularquiz';


function SettingsScreen({navigation}) {
return(
    
 
       
  <Text>Welcome to Settings</Text>

);
}
function NotificationsStackScreen({navigation}) {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Notification} 



      
         options={({ navigation, route }) => ({
 title: 'Notifications',
      headerTitleAlign: 'center',

  headerStyle: {
            backgroundColor: 'tomato',
              

          },
            headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
             
          },
              headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
            />,
          })}
  
      />
  
    </SettingsStack.Navigator>
  );
}

function Notification({ navigation }) {
  
  return(
<View style={{flex: 1,   marginTop:'5%', marginLeft: '10%',marginRight:'10%',fontWeight: 'bold', shadowColor: "#000",
 shadowOffset: {
   width: 2,
   height: 0,
 },
 shadowOpacity: 0.58,
 shadowRadius: 8.00,
 alignItems: 'center',
 
 elevation: 15,
    marginBottom:"85%",
     
     borderRadius: 10,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
  
   width:'85%',
     height:18,
     marginLeft: '5%',
     marginRight: '5%',
     
    }}>
    <Notifications />
    </View>
  );
}
function SettingsStackScreen({navigation}) {
   return (
     <SettingsStack.Navigator>
       <SettingsStack.Screen name="Settings" component={SettingsScreen} 
          options={({ navigation, route }) => ({
  title: 'My Location',
       headerTitleAlign: 'center',
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
               headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
             />,
           })}
   
       />
   
     </SettingsStack.Navigator>
   );
 }
 function VideoStackScreen({navigation}) {
   return (
     <SettingsStack.Navigator>
       <SettingsStack.Screen name="Videos" component={Video} 
          options={({ navigation, route }) => ({
  title: 'Videos',
       headerTitleAlign: 'center',
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
            
            
            
            
            
             />,
           })}  />
   
     </SettingsStack.Navigator>
   );
 }
 function ContactScreen({ navigation }) {
  
   return(
   <View style={{flex: 1, height: 1,  marginTop:'15%', marginLeft: '-8%',fontWeight: 'bold'}} >
                   <Text style={{ marginLeft: '32%',fontWeight: 'bold'}}>ITC Training Institute</Text>
  <Text style={{ marginLeft: '15%'}}>Building No : 1745, Sector 45, Gurgaon, India</Text>
  <Text style={{ marginLeft: '28%'}}> Mobile No: 9717614047 </Text>
   <Text style={{ marginLeft: '15%', marginBottom: '10%'}}> Email Id: pkparveenbarak@gmail.com </Text>
   <Image source={require('./screenshot.png')}/>
</View>
     
   );
 }
 
 
 function ContactStackScreen({navigation}) {
   return (
     <SettingsStack.Navigator>
       <SettingsStack.Screen name="Contact Details" component={ContactScreen}
       
       
           options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
            
  
             />,
           })}
            />
   
     </SettingsStack.Navigator>
   );
 }
 
function Video() {
   return (
      <ScrollView>
   <View style={styles.Container}>
       <WebView
         style={ styles.WebViewStyle }
         source={{ uri: 'https://www.youtube.com/embed/MKAD2QL8IbQ' }}
         javaScriptEnabled={true}
         domStorageEnabled={true}   
         
        
       />
       
  <Text>WebView</Text>
 <WebView
         style={ styles.WebViewStyle }
         source={{ uri: 'https://www.youtube.com/embed/658204I1Vvc' }}
         javaScriptEnabled={true}
         domStorageEnabled={true}   
         
        
       />
        <Text>WebView</Text>
 <WebView
         style={ styles.WebViewStyle }
         source={{ uri: 'https://www.youtube.com/embed/N25SjVlvMOE' }}
         javaScriptEnabled={true}
         domStorageEnabled={true}   
         
        
       />
        <Text>WebView</Text>
 
 
 
     </View></ScrollView>
   );
 }
 const HomeStack = createStackNavigator();
 
 function DetailsScreen() {
   return (
      <View style={styles.Container}>
       
        <Playquiz />
 
 
 
 
     </View>
   
   );
 }
 
 
 
 function JobsScreens() {
   return (
     <ScrollView>
      <View style={styles.jobs}>
       <View style={styles.jobsStyleOne}>
      
          <TouchableOpacity>
      <Text>Aws Jobs</Text>
   </TouchableOpacity>
       </View>
       
      
     
    
         <View style={styles.jobsStyleTwo}>
      
          <TouchableOpacity>
      <Text>Digital Marketing Jobs</Text>
   </TouchableOpacity>
       </View>
       
         <View style={styles.jobsStyleThree}>
      
          <TouchableOpacity>
      <Text>React Native & React js Jobs</Text>
   </TouchableOpacity>
       </View>
     
     </View>
      </ScrollView>
   );
 }
 
 function VideoScreen() {
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Video Screen!</Text>
     </View>
   );
 }
 
 function BootstrapstackScreen({navigation}) {
  return (
    <Bootstrapquiz />
  );
}




 
function AWSstackScreen({navigation}) {
  return (
    <Awsquiz />
  );
}



 
function PythonstackScreen({navigation}) {
  return (
    <Pythonquiz />
  );
}


function AngularstackScreen({navigation}) {
  return (
    <Angularquiz />
  );
}

function NodestackScreen({navigation}) {
  return (
    <Nodequiz />
  );
}



 function QuizScreen({navigation}) {
   return (
      <ScrollView>
   <View style={styles.a}>
       <View style={styles.container1}>
       <View style={styles.viewStyleOne}>
      
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
       <Image source={require('./react.jpg')}/>
   </TouchableOpacity>
       </View>
       
       <View style={styles.viewStyleTwo}>
      <TouchableOpacity onPress={() => navigation.navigate('Bootstrap')}>
       <Image source={require('./bootstrap.png')} />
       
 
     </TouchableOpacity>
       </View>
     
     </View>
     <View style={styles.container1}>
     <View style={styles.viewStyleThree}>
      <TouchableOpacity onPress={() => navigation.navigate('Node-Quiz')}>
     <Image source={require('./nodejs.jpg')}/>
      </TouchableOpacity>
   
       </View>
       <View style={styles.viewStyleFour}>
       <TouchableOpacity onPress={() => navigation.navigate('Angular-Quiz')}>
       <Image source={require('./angularjs.jpg')}/>
       </TouchableOpacity>
   
       </View>
     </View>
        <View style={styles.container1}>
     <View style={styles.viewStyleFive}>
      <TouchableOpacity onPress={() => navigation.navigate('AWS-Quiz')}>
     <Image source={require('./aws.jpg')}/>
     </TouchableOpacity>
   
       </View>
       

       <View style={styles.viewStyleSix}>
       <TouchableOpacity onPress={() => navigation.navigate('Python-Quiz')}> 
       <Image source={require('./Python.jpg')}/>
       </TouchableOpacity>
   
       </View>
     </View>
    
    <View style={styles.container1}>
     <View style={styles.viewStyleSeven}>
      
   
       </View>
       <View style={styles.viewStyleEight}>
     
      
   
       </View>
     </View>
     
    
     </View>
     </ScrollView>
     
   );
 }
 
 
 
 
 
 
 
 const LogoTitle2= (props)=> {
   //Structure for the navigatin Drawer
   const toggleDrawer = () => {
     //Props to open/close the drawer
     props.navigationProps.toggleDrawer();
   };
  return (
    
     
  <View style={{flexDirection: 'row'}}>
  <TouchableOpacity  onPress={()=> toggleDrawer()} >
       <Image source={require('./drawer.png')}
       style={{ width: 23, height: 23, marginLeft: 15 }}
       
       />
       
   </TouchableOpacity>
  
       </View>
   );
 }

 function HomeStackScreen({ navigation }) {
 
   return (
     <HomeStack.Navigator>
       <HomeStack.Screen name="Home"  component={HomeScreen}
 options={({ navigation, route }) => ({
  title: 'Home',
       headerTitleAlign: 'center',
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
        
             headerTintColor: '#fff',
             
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
        
             headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
            
            
            
            
             />,
           })}
      
       />
       <HomeStack.Screen name="Details" component={DetailsScreen}
       options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
 
            
             />,
           })}
        />
 <HomeStack.Screen name="Bootstrap" component={BootstrapstackScreen}
       options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
 
            
             />,
           })}
        />
<HomeStack.Screen name="AWS-Quiz" component={AWSstackScreen}
       options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
 
            
             />,
           })}
        />

<HomeStack.Screen name="Python-Quiz" component={PythonstackScreen}
       options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
 
            
             />,
           })}
        />



<HomeStack.Screen name="Angular-Quiz" component={AngularstackScreen}
       options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
 
            
             />,
           })}
        />

<HomeStack.Screen name="Node-Quiz" component={NodestackScreen}
       options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
 
            
             />,
           })}
        />











        <HomeStack.Screen name="Quiz" component={QuizScreen}
       options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
 
            
             />,
           })}
       
       
 
       
        />
        <HomeStack.Screen name="Jobs" component={JobsScreens} 
        options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
            
            
            
            
            
             />
 
 
 
 
 
 
 
 
 
 
 
 
 
 
           })}
        
        
        
        
        
        
        
        
        
        />
          <HomeStack.Screen name="Video" component={VideoStackScreen}
          
          options={({ navigation, route }) => ({
 
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}
            
            
            
            
            
             />,
           })}
          
          
          
          
          
          
          
          
          
          
          
          
           />
          
     </HomeStack.Navigator>
   );
 }
 const SettingsStack = createStackNavigator();
 const Tab = createBottomTabNavigator();
 function ProfileScreen({ navigation }) {
   return (
   
       <Tab.Navigator
       screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;
 
             if (route.name === 'Home') {
               iconName = focused
                 ? 'ios-home'
                 : 'ios-home';
             } else if (route.name === 'contacts') {
               iconName = focused ? 'ios-contacts' : 'ios-contacts';
             }
              else if (route.name === 'location') {
               iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks';
             }
               else if (route.name === 'videos') {
               iconName = focused ? 'ios-videos' : 'ios-videos';
             }
             else if (route.name === 'settings') {
               iconName = focused ? 'ios-settings' : 'ios-settings';
             }
             else if (route.name === 'notifications') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications';
            }
 
             // You can return any component that you like here!
             return <Ionicons name={iconName} size={size} color={color} />;
           },
         })}
         tabBarOptions={{
           activeTintColor: 'tomato',
           inactiveTintColor: 'gray',
         }}
       
       
       
       
       
       
       
       
       
       
       >
         <Tab.Screen name="Home" component={HomeStackScreen} 
       options={{
     
            
           headerStyle: {
             
             backgroundColor: 'tomato',
               
 
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
         }}
         
         />
            <Tab.Screen name="contacts" component={ContactStackScreen} 
         
         
         
         
         
         />
         <Tab.Screen name="notifications" component={NotificationsStackScreen} 
          
         />
         
         <Tab.Screen name="settings" component={SettingsStackScreen} 
         
         
         
         
         
         />
         <Tab.Screen
         name="video"
         component={VideoStackScreen}
     
 
         options={{
           tabBarLabel: 'video',
           tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="video" color={color} size={26} />
           ),
         }}
       />
    
       </Tab.Navigator>
     
   );
 }
 
 function HomeScreen({ navigation }) {
 
 
   
   
   
   
   return (
      <ScrollView>
   <View style={styles.a}>
       <View style={styles.container1}>
       <View style={styles.viewStyleOne}>
      
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
       <Image source={require('./course.png')}/>
   </TouchableOpacity>
       </View>
       
       <View style={styles.viewStyleTwo}>
      <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>
       <Image source={require('./jobs.jpg')} />
       
 
     </TouchableOpacity>
       </View>
     
     </View>
     <View style={styles.container1}>
     <View style={styles.viewStyleThree}>
      <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>
     <Image source={require('./placement.png')}/>
      </TouchableOpacity>
   
       </View>
       <View style={styles.viewStyleFour}>
       <TouchableOpacity onPress={() => navigation.navigate('video')}>
       <Image source={require('./video.jpg')}/>
       </TouchableOpacity>
   
       </View>
     </View>
        <View style={styles.container1}>
     <View style={styles.viewStyleFive}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
     <Image source={require('./quiz.jpg')}/>
     </TouchableOpacity>
   
       </View>
       <View style={styles.viewStyleSix}>
       <Image source={require('./question.png')}/>
      
   
       </View>
     </View>
      
     <View style={styles.container1}>
     <View style={styles.viewStyleSeven}>
      
   
       </View>
       <View style={styles.viewStyleEight}>
       
      
   
       </View>
     </View>
     
    
     </View>
     </ScrollView>
   );
 }
 
 const Drawer = createDrawerNavigator();
 const Stack = createStackNavigator();
 
 function Root({navigation}) {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Home" component={ProfileScreen} 
 
       options={{
           title: '             IT TRAINING CLASSES',
             headerShown : false,
           headerStyle: {
             backgroundColor: '#f4511e',
               
 
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
         }}
      
       
       
       
       
       
       />
       <Stack.Screen name="Settings" component={SettingsStackScreen} 
       
       options={({ navigation, route }) => ({
  title: 'Settings',
       headerTitleAlign: 'center',
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}

            
             />,
           })}
      />

<Stack.Screen name="Bootstrap" component={BootstrapstackScreen} 
       
       options={({ navigation, route }) => ({
  title: 'Bootstrap',
       headerTitleAlign: 'center',
 
   headerStyle: {
             backgroundColor: 'tomato',
               
 
           },
             headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
              
           },
            headerLeft: ()=> <LogoTitle2 navigationProps={navigation}

            
             />,
           })}
      />

     </Stack.Navigator>
   );
 }
 function CustomDrawerContent(props) {
   return (
   
     <DrawerContentScrollView {...props}>
     
    
       <Image source={require('./logo.png')}
       
        style={{ marginLeft: 100, marginTop:22}}
       
       
       
       
       
       
       
       />
 <View style={{flex: 1, height: 1, backgroundColor: '#808080',  marginTop:28, marginBottom:20}} />
 
   <DrawerItemList {...props} 
     
       
       />
       
     </DrawerContentScrollView>
   );
 }
 export default function App(Profile) {


   return (
     <NavigationContainer>
           <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
         <Drawer.Screen name="Welcome" component={Root}
     options={{
          drawerIcon: ({ tintColor }) => (
           <Image
             source={require("./")}
             resizeMode="contain"
             style={{ width: 25, height: 22, tintColor: tintColor }}
           />
         )
           
          
         }}
         
         />
      <Drawer.Screen name="Home" component={ProfileScreen}
     options={{
          drawerIcon: ({ tintColor }) => (
           <Image
             source={require("./h.png")}
             resizeMode="contain"
             style={{ width: 25, height: 22, tintColor: tintColor }}
           />
         )
           
          
         }}
         
         />
 <Drawer.Screen name="Videos" component={VideoStackScreen} 
         options={{
          drawerIcon: ({ tintColor }) => (
           <Image
             source={require("./videiicon.jpg")}
             resizeMode="contain"
             style={{ width: 25, height: 22, tintColor: tintColor }}
           />
         )
           
          
         }}
         />
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
         <Drawer.Screen name="Contact Us" component={ContactStackScreen} 
       options={{
          drawerIcon: ({ tintColor }) => (
           <Image
             source={require("./cv.png")}
             resizeMode="contain"
             style={{ width: 25, height: 22, tintColor: tintColor }}
           />
         )
           
          
         }}
         />
         <Drawer.Screen name="Notification" component={NotificationsStackScreen} 
       options={{
          drawerIcon: ({ tintColor }) => (
           <Image
             source={require("./notifications.jpg")}
             resizeMode="contain"
             style={{ width: 25, height: 22, tintColor: tintColor }}
           />
         )
           
          
         }}
         />
       </Drawer.Navigator>
     </NavigationContainer>
   );
 }
 const styles = StyleSheet.create ({
   
 
 Container: {
  height: 800,
  marginTop: 1
   },
   WebViewStyle: {
 
     alignSelf: 'stretch',
     height: 570
   },   
  
   container1: { 
      flexDirection:'row',
 
    
     justifyContent: 'center',
 
 
 
 
 },
 
  viewStyleOne: {
     shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 },
 shadowOpacity: 0.58,
 shadowRadius: 8.00,
 alignItems: 'center',
 
 elevation: 14,
     marginTop: "12%",
     borderRadius: 20,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
     marginBottom:10,
   width:'45%',
     height:120,
     marginLeft: '5%',
     margin: 14,
     paddingBottom: -68,
    
   }, 
   viewStyleTwo: {
        
     
     shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 },
 shadowOpacity: 0.58,
 shadowRadius: 8.00,
 alignItems: 'center',
 marginRight:'5%',
 elevation: 14,
     marginTop: "12%",
     borderRadius: 20,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
     marginBottom:10,
   width:'45%',
     height:120,
   
     margin: 14,
     paddingBottom: -68,
   },
   viewStyleThree: {
     
      
     shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 },
 shadowOpacity: 0.58,
 shadowRadius: 8.00,
 alignItems: 'center',
 marginLeft: '5%',
 elevation: 14,
     marginTop: "10%",
     borderRadius: 20,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
     marginBottom:10,
  
     height:120,
      width:'45%',
     margin: 14,
     paddingBottom: -68,
   },
   viewStyleFour: {
           
     shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 },
 shadowOpacity: 0.58,
 shadowRadius: 8.00,
 alignItems: 'center',
 marginRight: '5%',
 elevation: 14,
     marginTop: "10%",
     borderRadius: 20,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
     marginBottom:10,
   width:'45%',
     height:120,
     
     margin: 14,
     paddingBottom: -68,
   },
 
 
 viewStyleFive: {
           
     shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 },
 shadowOpacity: 0.58,
 shadowRadius: 8.00,
 alignItems: 'center',
 
 elevation: 14,
     marginTop: "10%",
     borderRadius: 20,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
     marginBottom:20,
    width:'45%',
     height:120,
     
     margin: 14,
     paddingBottom: -68,
   },
 
 viewStyleSix: {
           
     shadowColor: "#000",
 shadowOffset: {
   width: 0,
   height: 2,
 },
 shadowOpacity: 0.58,
 shadowRadius: 8.00,
 alignItems: 'center',
 
 elevation: 14,
     marginTop: "10%",
     borderRadius: 20,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
     marginBottom:20,
    width:'45%',
     height:120,
     
     margin: 14,
     paddingBottom: -68,
   },
 viewStyleSeven: {
    
     backgroundColor: "#FDFEFE",
     marginBottom:20,
   },
 viewStyleEight: {
           
     
     backgroundColor: "#FDFEFE",
     
     marginBottom:20,
   
   },
 
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
     marginTop: "6%",
     borderRadius: 20,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
    
   height:160,
     
     margin: 14,
     paddingBottom: -68,
    
   }, 
     jobsStyleTwo: {
 
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
    
     borderRadius: 20,
     backgroundColor: "#FDFEFE",
     overflow: 'hidden',
    
   height:160,
     
     margin: 14,
     paddingBottom: -68,
   },  
   
  jobsStyleThree: {
 
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
 
 