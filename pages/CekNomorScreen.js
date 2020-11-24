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

const CekNomorScreen = ({ navigation }) => {
  return (
    <View
    style={{
      flex: 2,
    }}
    >
    <View
      style={{
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center"
      }}
    >
    </View>
    <View
      style={{
        flex: 2,
        marginHorizontal: 8
      }}
    >
      
      <TextInput
      placeholder="Nominal Top Up"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20
      }}
      />
      <TextInput
      placeholder="Nomor Handphone Penerima"
      style={{
        height: 40,
        borderColor: '#A9A9A9', 
        borderWidth: 1,
        borderBottomWidth: 1,
        marginBottom: 20
      }}
      />
      <Button onPress={() => navigation.navigate('CekNomor')}
      title="Periksa Nomor"
      />
      </View>
      <View
      style={{
        flex: 1,
        marginTop: 40,
        alignItems: "center"
      }}
      >
        <Text>Penerima : </Text>
        <Text>Romi Firdaus </Text>
        
        
      </View>
      <View
      style={{
        flex: 1,
        marginHorizontal: 8,
        marginBottom: 100,
        justifyContent: 'flex-start'
      }}
      >
        <Button onPress={() => navigation.navigate('TransferBerhasil')}
      title="Transfer"
      />

      </View>
        
    </View>
  );
}

export default CekNomorScreen;