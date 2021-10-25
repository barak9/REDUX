import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
  import PushNotificationIOS from 'react-native';



export default function App() {
  

  return (
    <View style={{fontWeight: 'bold',marginTop:'15%', marginLeft: '8%',marginRight:'8%',fontWeight: 'bold',}}>
      <Text>We are hiring intern students for Web development, Java, Python, AWS Cloud and APP development </Text>
      <Text style={{flex: 1,   marginTop:'5%', marginLeft: '2%',marginRight:'8%',}}>Class Us Today at 9717614047 or Mail your email ID at hr@ittrainingclasses.in</Text>
   
    </View>
  );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
 