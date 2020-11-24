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

const PembayaranBerhasilScreen = ({ navigation }) => {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'white'
    }}
    >
    <View
      style={{
        flex: 2,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: 'white',
        marginTop: 20
      }}
    >
    </View>
    <View
      style={{
        flex: 3,
        marginHorizontal: 8,
        backgroundColor: 'white'
      }}
    >
      <View style={[{ width: "98%", height: 100, marginLeft: 4, justifyContent: 'center', alignItems: "center" }]}>
        <Image style={styles.icon} source={require('../img/transaksi.png')}/>
        <Text style={[{fontSize: 20}]}>Pembayaran Berhasil!</Text>
        <Text style={[{fontSize: 20}]}>Rp. 60.000</Text>
        <View style={[{ width: "98%", height: 140, marginLeft: 4, marginTop: 10, backgroundColor: '#4982C1', justifyContent: 'center', alignItems: "center", borderRadius: 20 }]}>
        <Text style={[{fontSize: 20}]}>20 Agustus 2020</Text>
        <Text style={[{fontSize: 20}]}>Penerima : DTI Telkom University</Text>
        <Text style={[{fontSize: 20,marginBottom: 5}]}>Jl. Ciparay No. 20B, Kota Bandung</Text>
        </View>
        
        <View style={[{ width: "98%", height: 100, marginLeft: 4, justifyContent: 'center' }]}>
       
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

export default PembayaranBerhasilScreen;