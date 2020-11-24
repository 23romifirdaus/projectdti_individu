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
import { TouchableHighlight } from 'react-native-gesture-handler';


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
});

const HomeScreen = ({ navigation }) => {
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
      }}
      >
        <View style={[{ width: "90%", marginLeft: 16}]}>
          <Text style={[{ width: "90%", fontSize: 20}]}>Saldo Anda : </Text>
          <Text style={[{ fontSize: 42, fontWeight: 'bold'}]}>Rp. 6.340.500 </Text>
        </View>
      </View>
      <View
      style={{
        flex: 2,
      }}
      >
        <View style={[{ flexDirection:'row', width: "90%", height: 100, margin: 10, backgroundColor: "#4982C1", marginLeft: 16 }]}>
        <View style={[{ width: "20%", height: 50, margin: 22, justifyContent : 'space-around', alignItems:'center', backgroundColor: "white" }]}>
          <TouchableHighlight onPress={() => navigation.navigate('TopUp')}>
          <Image style={styles.icon} source={require('../img/icon_add.png')}/>     
          </TouchableHighlight>
            <View style={[{ width: "100%", height: 4, marginBottom: -30, justifyContent : 'space-around', alignItems:'center'}]}>
              <Text>Top Up</Text>
            </View>
          </View>
          <View style={[{ width: "20%", height: 50, margin: 22, justifyContent : 'space-around', alignItems:'center', backgroundColor: "white" }]}>
          <TouchableHighlight onPress={() => navigation.navigate('QRPay')}> 
          <Image style={styles.icon} source={require('../img/icon_qr.png')}/>    
          </TouchableHighlight>
        <View style={[{ width: "100%", height: 4, marginBottom: -30, justifyContent : 'space-around', alignItems:'center'}]}>
        <Text>QR Pay</Text>
      </View>
          </View>
          <View style={[{ width: "20%", height: 50, margin: 22, justifyContent : 'space-around', alignItems:'center', backgroundColor: "white" }]}>
          <TouchableHighlight onPress={() => navigation.navigate('Transfer')}>
          <Image style={styles.icon} source={require('../img/icon_transfer.png')}/>
          </TouchableHighlight>
            <View style={[{ width: "100%", height: 4, marginBottom: -30, justifyContent : 'space-around', alignItems:'center'}]}>
              <Text>Transfer</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[{marginLeft: 20}]}>5 Transaksi Terakhir Anda</Text>
      <View
      style={{
        flex: 5,
      }}
      >
        <ScrollView style={styles.container}>
          <View style={{flex:1,margin:10,backgroundColor:'white'}}>
          <Text style={{fontSize:16,marginTop:10,marginLeft:70}}>Rp100.000</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 082219441601</Text>

          <Text style={{fontSize:16,marginTop:10,marginLeft:70}}>Rp100.000</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 082219441601</Text>

          <Text style={{fontSize:16,marginTop:10,marginLeft:70}}>Rp100.000</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 082219441601</Text>

          <Text style={{fontSize:16,marginTop:10,marginLeft:70}}>Rp100.000</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 082219441601</Text>

          <Text style={{fontSize:16,marginTop:10,marginLeft:70}}>Rp100.000</Text>
          <Text style={{fontSize:14,marginLeft:70}}>Transfer Ke 082219441601</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;