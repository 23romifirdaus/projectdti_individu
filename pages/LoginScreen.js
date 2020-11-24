// In App.js in a new project

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  FlatList, 
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const LoginScreen = ({ navigation }) => {
  return (
    <View
      style={{
      flex: 1,
    }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 30, marginBottom: 20, color: "blue"}}>e-money</Text>
      </View>
        
      <View
        style={{
          flex: 2,
          marginHorizontal: 8
        }}
      >
        <TextInput
        placeholder="Email"
        style={{
          height: 40,
          borderColor: '#A9A9A9', 
          borderWidth: 1,
          borderBottomWidth: 1,
          marginBottom: 8
        }}
        />
        <TextInput
        placeholder="Password"
        style={{
          height: 40, 
          borderColor: '#A9A9A9', 
          borderWidth: 1,
          borderBottomWidth: 1,
          marginBottom: 20
        }}
        />
        

        <Button onPress={() => navigation.navigate('Home')}      
        title="LOGIN"
        />
        <TouchableOpacity onPress={() => navigation.navigate('Registrasi')}>
            <Text
            style={{ 
            color: 'black',
            fontSize: 20,
            marginTop: 20,
            textAlign: "center"
            }}>Registrasi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;