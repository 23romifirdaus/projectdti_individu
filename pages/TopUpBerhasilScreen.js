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

const TransferBerhasilScreen = ({ navigation }) => {
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
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'white'
      }}
    >
    </View>
    <View
      style={{
        flex: 1,
        marginHorizontal: 8,
        backgroundColor: 'white'
      }}
    >
      <View style={[{ width: "98%", height: 100, marginLeft: 4, justifyContent: 'center', alignItems: "center" }]}>
        <Image style={styles.icon} source={require('../img/transaksi.png')}/>
        <Text style={[{fontSize: 24}]}>Top Up Berhasil!</Text>
        <Text style={[{fontSize: 24}]}>Rp. 60.000</Text>
        <View style={[{ width: "80%", height: 100, marginLeft: 4, marginTop: 10, backgroundColor: '#4982C1', justifyContent: 'center', alignItems: "center" }]}>
        <Text style={[{fontSize: 24}]}>20 Agustus 2020</Text>
        <Text style={[{fontSize: 24}]}>VA Mandiri</Text>
        </View>
        
        <View style={[{ width: "80%", height: 100, marginLeft: 4, justifyContent: 'center' }]}>
       
        <Button 
          onPress={() => navigation.navigate('Home')}      
            title="Selesai"
        />
        </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center"
  },
});

export default TransferBerhasilScreen;