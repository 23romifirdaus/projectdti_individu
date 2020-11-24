// In App.js in a new project

import * as React from 'react';
import Axios from 'axios';
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
      if(response.navigate.data.status == "true"){
        navigate.navigate('LoginScreen');
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
    </View>
    <View
      style={{
        flex: 3,
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
      title="SUBMIT"
      onPress={() => submitRegistrasi()} 
      />
      </View>
    </View>
  );
}

export default RegistrasiScreen;