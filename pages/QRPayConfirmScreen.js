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

const QRPayConfirmScreen = ({ navigation }) => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'white'
    }}
    >
    <View
      style={{
        flex: 1,
        marginHorizontal: 8,
        backgroundColor: 'white'
      }}
    >
      
      <View style={[{ width: "98%", height: 100, marginLeft: 4, margin: 100, justifyContent: 'center', alignItems: "center" }]}>
        <Image style={styles.icon} source={require('../img/pembayaran.png')}/> 
        <Text style={[{fontSize: 20}]}>Rp. 60.000</Text>
        <View
        style={{
          width: 300,
          borderWidth: 1,
        borderColor:'black',
        margin:10,
        }}
        />
        </View>
        <View style={[{ width: "98%", height: 140, marginLeft: 4, backgroundColor: '#4982C1', justifyContent: 'center', alignItems: "center" }]}>
        <Text style={[{fontSize: 20}]}>Pembayaran Kepada :</Text>
        <Text style={[{fontSize: 20}]}>DTI Telkom University</Text>
        <Text style={[{fontSize: 20}]}>Jl. Telekomunikasi, Kota Bandung</Text>
        </View>
        <View style={[{ width: "98%", height: 100, marginLeft: 4, justifyContent: 'center' }]}>
       
        <Button 
          onPress={() => navigation.navigate('PembayaranBerhasil')}      
            title="Submit"
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  paddingTop: 22
  },
  item: {
  padding: 10,
  fontSize: 18,
  height: 44,
  },
  icon: {
  alignSelf: "center"
  },
});

export default QRPayConfirmScreen;