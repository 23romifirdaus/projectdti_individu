// In App.js in a new project

import React, {useState,useEffect} from 'react';
import axios from 'axios';
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
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const RegistrasiScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [nomorHandphone, setNomorHandphone] = useState('');

  useEffect(() => {

  });

  const submitRegistrasi = async () => {
    axios.post('https://emoneydti.basicteknologi.co.id/index.php/api/users/registrasi', {
      email: email,
      password: password,
      nama: nama,
      nomor_handphone: nomorHandphone
    })
    .then(function (response) {
      if(response.data.status == "true"){
        navigation.navigate('LoginScreen');
      }
      else {
        ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
      }
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
    }


  return (
    <View
      style={{
        marginTop: 100,
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
        marginBottom: 20
      }}
      onChangeText={ text => setEmail(text)}
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
      onChangeText={ text => setPassword(text)}
      />
      <TextInput
      placeholder="Nama"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20
      }}
      onChangeText={ text => setNama(text)}
      />
      <TextInput
      placeholder="No. Handphone"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20
      }}
      onChangeText={ text => setNomorHandphone(text)}
      />
      <Button 
      title="Submit"
      onPress={() => {submitRegistrasi()}} 
      />
      </View>
  );
}

export default RegistrasiScreen;